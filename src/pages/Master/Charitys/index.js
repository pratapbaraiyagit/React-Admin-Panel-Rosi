import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../components/layout/Breadcrumb';
import DataTable from 'react-data-table-component';
import './charitys.scss'
import { Link } from 'react-router-dom';
import Delete from '../../../components/svg/delete';
import Edit from '../../../components/svg/edit';
import View from '../../../components/svg/view';
import Plus from '../../../components/svg/plus';
import { useDispatch, useSelector } from 'react-redux';
import { CharityManagementListing } from '../../../actions/charity';
import { debounce } from '../../../utils';
import { BreadcrumbCharityManage } from '../../../components/layout/Breadcrumb-cause';
import StatusCharityModel from '../../../components/common/charity-manage-status';
import DeleteCharityManageModel from '../../../components/common/charity-manage-delete-modal';

const InCharitys = () => {
  const [arg, setArg] = useState({
    page: 1,
    limit: 99999,
    column: "",
    order: "",

  });

  const dispatch = useDispatch();

  const charityNewList = useSelector((state) => state.ChairtyReducer.charityNewList.charityList)

  const [name, setName] = useState('');
  const [charityName, setCharityName] = useState([])

  const [charityStatusModel, setCharityStatusModel] = useState(false);
  const [isCharityActive, setIsCharityActive] = useState(false);
  const [charityManageDeleteModel, setCharityManageDeleteModel] = useState(false);

  const [charityModelId, setCharityModelId] = useState()
  const [charityManageDeleteId, setCharityManageDeleteId] = useState()

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = charityNewList.filter((user) => {
        const query = keyword.toLowerCase()
        return (
          user.charityName.toLowerCase().indexOf(query) >= 0 ||
          user.taxId.toLowerCase().indexOf(query) >= 0
        )
      })
      setCharityName(results)
    } else {
      setCharityName(charityNewList)
    }
    setName(keyword)
  }

  const handlerDelete = (id) => {
    setCharityManageDeleteId(id)
    setCharityManageDeleteModel(true)
  }

  const onHnadlerActive = (charityDetail) => {
    setCharityModelId(charityDetail._id)
    setCharityStatusModel(prev => !prev)
    setIsCharityActive(charityDetail?.isActive);
  }

  useEffect(() => {
    setCharityName(charityNewList)
  }, [charityNewList])

  useEffect(() => {
    dispatch(CharityManagementListing(arg)).then(res => setCharityName(res.data.charityList));
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

  const columns = [
    {
      name: 'Charity Name',
      selector: row => row.charityName,
    },
    {
      name: 'Tax ID',
      selector: row => row.taxId,
    },
    {
      name: 'Status',
      selector: row => row.status,
      cell: (roww) => <div className='status-box ' >
        <label className="switch">
          <input type="checkbox" checked={roww.isActive} onClick={() => onHnadlerActive(roww)} />
          <span className="slider rounds"></span>
        </label>
      </div>,
    },
    {
      name: 'Action',
      selector: row => row.action,
      minWidth: '180px',
      cell: (row) => <div className='action-box' >
        {/* <Link to="/master/charity_views" className='btn right' title='view'> <View />   </Link> */}
        {/* <Link to="/master/charity_views" className='btn wrong' title='delete' > <Delete /> </Link> */}
        <span
          className='btn wrong'
          title='delete'
          onClick={() => handlerDelete(row._id)}
        > <Delete /> </span>
        <Link to={`/master/charity_edit/${row._id}`} className='btn right' title='edit' > <Edit /> </Link>
      </div>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ];

  const onChangeFun = (e) => {
    console.log('e.target.value: ', e);
  }
  const optimizedFn = debounce(onChangeFun)

  return (
    <>
      <div>
        <div className='top-box' >
          <BreadcrumbCharityManage />
          <h2>Charity Management </h2>
        </div>
        <div className='section-inner'>
          <div className='d-flex justify-content-between' >
            <div className='search-box'>
              <input
                type="text"
                placeholder='Search'
                className='search-input'
                value={name}
                onChange={filter}
              // onChange={(e) => setArg({ ...arg, search: e.target.value })}
              />
            </div>
            <div className='div-btn-box'>
              <Link to="/master/charity_add" className='btn' title='add' > <Plus /> Add New Charity  </Link>
            </div>
          </div>
          <DataTable
            border
            columns={columns}
            data={charityName?.length ? charityName : []}
            pagination
            customStyles={customStyles}
            dense
          />
        </div>
      </div>
      <StatusCharityModel setCharityStatusModel={setCharityStatusModel} charityStatusModel={charityStatusModel} charityModelId={charityModelId} isCharityActive={isCharityActive} />
      <DeleteCharityManageModel setCharityManageDeleteModel={setCharityManageDeleteModel} charityManageDeleteModel={charityManageDeleteModel} charityManageDeleteId={charityManageDeleteId} />

    </>
  )
}

export default InCharitys;
