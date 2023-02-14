import React, { useEffect, useMemo, useState } from 'react'
import Breadcrumb from '../../../components/layout/Breadcrumb';
import DataTable from 'react-data-table-component';
import './cause.scss'
import { Link, useParams } from 'react-router-dom';
import Delete from '../../../components/svg/delete';
import Edit from '../../../components/svg/edit';
import View from '../../../components/svg/view';
import Plus from '../../../components/svg/plus';
import { useDispatch, useSelector } from 'react-redux';
import { causeActiveInActive, causeDelete, causeListing } from '../../../actions/cause';
import { BreadcrumbCause } from '../../../components/layout/Breadcrumb-cause';
import DeleteCauseModel from '../../../components/common/cause-delete-modal';
import StatusCauseModel from '../../../components/common/cause-status';

const Cause = () => {
  const dispatch = useDispatch();

  const causeList = useSelector((state) => state.CauseReducer.causeList?.causeFilter);

  const [arg, setArg] = useState({
    page: 1,
    limit: 99999,
    search: "",
    // order: "",
  });

  const [causeDeleteModel, setCauseDeleteModel] = useState(false);
  const [causeStatusModel, setCauseStatusModel] = useState(false);

  const [causeDeleteId, setCauseDeleteId] = useState()
  const [causeModelId, setCauseModelId] = useState()

  const [name, setName] = useState('');
  const [causeName, setCauseName] = useState([])
  const [isCauseActive, setIsCauseActive] = useState(false);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = causeList.filter((user) => {
        const query = keyword.toLowerCase()
        return (
          user.causename.toLowerCase().indexOf(query) >= 0
        )
      })
      setCauseName(results)
    } else {
      setCauseName(causeList)
    }
    setName(keyword)
  }

  const handlerDelete = (id) => {
    setCauseDeleteId(id)
    setCauseDeleteModel(true)
  }

  const onHnadlerActive = (causeDetail) => {
    setCauseModelId(causeDetail._id)
    setCauseStatusModel(prev => !prev)
    setIsCauseActive(causeDetail?.isActive);
  }

  useEffect(() => {
    setCauseName(causeList)
  }, [causeList])

  useEffect(() => {
    dispatch(causeListing(arg)).then(res => setCauseName(res.data.causeFilter));
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
      name: 'Cause Name',
      selector: (row) => row.causename,
      sortable: true,
    },
    {
      name: 'Status',
      selector: roww => roww.isActive,
      cell: (roww) => (
        <div className='status-box ' >
          <label className="switch">
            <input type="checkbox" checked={roww.isActive} onClick={() => onHnadlerActive(roww)} />
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
        <Link to={`/cause/cause_edit/${row._id}`} className='btn right' title='edit' > <Edit /> </Link>
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
          <BreadcrumbCause />
          <h2>Cause Management </h2>
        </div>
        <div className='section-inner cause-section'>
          <div className='d-flex justify-content-between' >
            <div className='search-box'>
              <input type="text"
                placeholder='Search'
                className='search-input'
                value={name}
                onChange={filter}
              />
            </div>
            <div className='div-btn-box'>
              <Link to="/cause/cause_add" className='btn' title='add' > <Plus /> Add New Cause  </Link>
            </div>
          </div>
          <DataTable
            border
            columns={columns}
            // data={causeList}
            data={causeName?.length ? causeName : []}
            pagination
            customStyles={customStyles}
            dense
          />
        </div>
      </div>
      <DeleteCauseModel setCauseDeleteModel={setCauseDeleteModel} causeDeleteModel={causeDeleteModel} causeDeleteId={causeDeleteId} />
      <StatusCauseModel setCauseStatusModel={setCauseStatusModel} causeStatusModel={causeStatusModel} causeModelId={causeModelId} isActive={isCauseActive} />
    </>
  )
}

export default Cause;