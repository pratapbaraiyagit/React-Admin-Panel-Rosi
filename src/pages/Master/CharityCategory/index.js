import React, { useEffect, useMemo, useState } from 'react'
import Breadcrumb from '../../../components/layout/Breadcrumb';
import { BreadcrumbCharityCategory } from '../../../components/layout/Breadcrumb-carity-cate'
import DataTable from 'react-data-table-component';
import './charitycategory.scss'
import { Link, useParams } from 'react-router-dom';
import Delete from '../../../components/svg/delete';
import Edit from '../../../components/svg/edit';
import View from '../../../components/svg/view';
import Plus from '../../../components/svg/plus';
import { useDispatch, useSelector } from 'react-redux';
import { charityCategoryActiveInActive, charityCategoryDelete, charityCategoryEdit, charityCategoryListing } from '../../../actions/charityCategory';
import AddCharityModel from '../../../components/common/carity-category-add';
import EditCharityModel from '../../../components/common/carity-category-edit';
import DeleteCharityModel from '../../../components/common/carity-category-delete';
import StatusCharityModel from '../../../components/common/charity-category-status';

const CharityCategory = () => {
  const [arg, setArg] = useState({
    page: 1,
    limit: 999999,
    search: "",
    order: "",
  });

  const dispatch = useDispatch();

  const charityCategoryList = useSelector((state) => state.charityCategoryReducer?.charityCategoryList?.categoryFilter);
  const activeCharityCategory = useSelector((state) => state.charityCategoryReducer?.activeCharityCategory);

  const [name, setName] = useState('');
  const [charityCategoryName, setCharityCategoryName] = useState([])

  const [isCharityActive, setIsCharityActive] = useState(false);

  const [isModel, setModel] = useState(false);
  const [editModel, setEditModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);
  const [statusModel, setStatusModel] = useState(false);

  const [editId, setEditId] = useState()
  const [deleteId, setDeleteId] = useState()
  const [modelId, setModelId] = useState()

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = charityCategoryList.filter((user) => {
        const query = keyword.toLowerCase()
        return (
          user.category_name.toLowerCase().indexOf(query) >= 0
        )
      })
      setCharityCategoryName(results)
    } else {
      setCharityCategoryName(charityCategoryList)
    }
    setName(keyword)
  }

  const handlerDelete = (id) => {
    setDeleteId(id)
    setDeleteModel(true)
  }

  const onHandlerAddNew = () => {
    setModel(true);
  }
  const onHandlerEdit = (id) => {
    setEditId(id)
    dispatch(charityCategoryEdit(id))
    setEditModel(true)
  }

  const onHandlerActive = (charityDetail) => {
      setModelId(charityDetail?._id)
    setStatusModel(prev => !prev)
    setIsCharityActive(charityDetail?.isActive)
  }

  useEffect(() => {
    setCharityCategoryName(charityCategoryList)
  }, [charityCategoryList])

  useEffect(() => {
    dispatch(charityCategoryListing(arg)).then(res => setCharityCategoryName(res.data.categoryFilter));
  }, [arg]);

  const customStyles = {
    headCells: {
      style: {
        paddingTop: '8px',
        paddingBottom: '8px',
      },
    },
    cells: {
      style: {
        paddingTop: '8px',
        paddingBottom: '8px',
      },
    },
  };

  let columns = [
    {
      name: 'Charity Name',
      selector: (row) => row.category_name,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.isActive,
      cell: (roww) => (
        <div className='status-box ' >
          <label className="switch">
            <input type="checkbox" checked={roww.isActive} onClick={() => onHandlerActive(roww)} />
            <span className="slider rounds"></span>
          </label>
        </div>
      )
    },
    {
      name: 'Action',
      selector: row => row.action,
      minWidth: '180px',
      cell: (row) => <div className='action-box' >
        <span
          className='btn wrong'
          title='delete'
          onClick={() => handlerDelete(row._id)}
        > <Delete /> </span>
        <button type='button' className='btn' title='edit' onClick={() => onHandlerEdit(row._id)} > <Edit /></button>

      </div>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ];

  return (
    <>
      <div>
        <div className='top-box' >
          <BreadcrumbCharityCategory />
          <h2>Charity Category Management </h2>
        </div>
        <div className='section-inner cause-section'>
          <div className='d-flex justify-content-between' >
            <div className='search-box'>
              <input
                type="text"
                placeholder='Search'
                className='search-input'
                value={name}
                onChange={filter}
              />
            </div>
            <div className='div-btn-box'>
              <button type='button' className='btn' title='add' onClick={onHandlerAddNew} > <Plus /> Add New Charity Category  </button>
            </div>
          </div>
          <DataTable
            border
            columns={columns}
            // data={charityCategoryList}
            data={charityCategoryName?.length ? charityCategoryName : []}
            pagination
            customStyles={customStyles}
            dense
          />
        </div>
      </div>
      {isModel && <AddCharityModel setModel={setModel} isModel={isModel} />}
      {editModel && <EditCharityModel setEditModel={setEditModel} editModel={editModel} editId={editId} />}
      <DeleteCharityModel setDeleteModel={setDeleteModel} deleteModel={deleteModel} deleteId={deleteId} />
      {statusModel && <StatusCharityModel setStatusModel={setStatusModel} statusModel={statusModel} modelId={modelId} isCharityActive={isCharityActive}/>}
    </>
  )
}

export default CharityCategory;