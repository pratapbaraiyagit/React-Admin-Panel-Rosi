import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/layout/Breadcrumb";
import DataTable from "react-data-table-component";
import "./charity.scss";
import { Link } from "react-router-dom";
import Right from "../../components/svg/right";
import Wrong from "../../components/svg/wrong";
import { useDispatch, useSelector } from "react-redux";
import { Charitylisting } from "../../actions/charity";
import View from "../../components/svg/view";
import { debounce } from "../../utils";

const Master = () => {
  const [arg, setArg] = useState({
    page: 1,
    limit: 100,
    search: "",
    column: "Name",
    order: "",
  });

  const dispatch = useDispatch();
  const charity = useSelector(
    (state) => state.ChairtyReducer.charityList.charityList
  );
  console.log(charity);
  const customStyles = {
    headCells: {
      style: {
        paddingTop: "8px",
        paddingBottom: "8px",
      },
    },
    cells: {
      style: {
        paddingTop: "8px",
        paddingBottom: "8px",
      },
    },
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.charityName,
      sortable: true,
    },
    {
      name: "Tax ID",
      selector: (row) => row.taxId,
    },
    {
      name: "Status",
      selector: (row) => row.adminVerification,
      cell: (row) => (
        <div className="status-box">
          {row.adminVerification === "Approved" ? (
            <span className="approve">approve</span>
          ) : row.adminVerification === "Reject" ? (
            <span className="reject">Reject</span>
          ) : (
            <span className="pending">pending</span>
          )}
        </div>
      ),
    },
    {
      name: "Action",
      selector: (row) => row.action,
      minWidth: "180px",
      cell: (row) => (
        
        <div className="action-btn">
        {row.adminVerification === "Pending"? (<> <Link
            to={`/master/master_view/${row._id}`}
            className="btn right"
            title="Approved"
          >
            {" "}
            <Right />{" "}
          </Link>

          <Link
            to={`/master/master_view/${row._id}`}
            className="btn wrong"
            title="Reject"
          >
            {" "}
            <Wrong />{" "}
          </Link></>): (<Link to={`/master/master_view/${row._id}`} className='btn right' title='view'> <View /></Link>) }
          {/* <Link
            to={`/master/master_view/${row._id}`}
            className="btn right"
            title="Approved"
          >
            {" "}
            <Right />{" "}
          </Link>

          <Link
            to={`/master/master_view/${row._id}`}
            className="btn wrong"
            title="Reject"
          >
            {" "}
            <Wrong />{" "}
          </Link>
           */}
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  useEffect(() => {
    dispatch(Charitylisting(arg)).then((res) => console.log("res"));
  }, [arg]);

  const onChangeFun = (e) => {
    console.log('e.target.value: ', e);
    dispatch(Charitylisting({...arg,search:e})).then((res) => console.log("res"));
  }
  const optimizedFn = debounce(onChangeFun)

  return (
    <>
      <div>
        <div className="top-box">
          <Breadcrumb />
          <h2>Charity list </h2>
        </div>
        <div className="section-inner">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              onChange={(e) => optimizedFn(e.target.value)}
            />
          </div>
          <DataTable
            border
            columns={columns}
            data={charity}
            pagination
            customStyles={customStyles}
            responsive={true}
            dense
          />
        </div>
      </div>
    </>
  );
};

export default Master;
