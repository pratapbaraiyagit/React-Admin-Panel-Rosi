import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../components/layout/Breadcrumb";
import DataTable from "react-data-table-component";
import { toAbsoluteUrl } from '../../../utils';
import { Link } from "react-router-dom";
import Delete from "../../../components/svg/delete";
import Edit from "../../../components/svg/edit";
import View from "../../../components/svg/view";
import Plus from "../../../components/svg/plus";
import "../content.scss";


   
const Leadership = () => {

  const list = [
    {
        name:" Content Management ",
        link: "/homepage",
        isactive:false
    },
    {
        name:"Leadership",
        link: "/content_management/leadership",
        isactive:true
    }
  ]

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
        name: 'Name and image',
        selector: row => row.name,
    },
    {
      name: 'Designation',
      selector: row => row.creat,
  },
    {
      name: 'Description' ,
      selector: row => row.logo,
    },
    {
      name: 'Action',
      selector: row => row.action,
      minWidth : '180px' ,
      cell: () => <div className='action-box' >
            <Link to="/content_management/view_leadership" className='btn right' title='view'> <View />   </Link>
            <Link to="/content_management/edit_leadership" className='btn wrong' title='delete' > <Delete /> </Link>
            <Link to="/content_management/edit_leadership" className='btn right' title='edit' > <Edit /> </Link>
          </div>,
				ignoreRowClick: true,
				allowOverflow: true,
				button: true,
    }
];


const data = [
    {
        id: 1,
        name:  
        <div className="profile-list-box" >
            <figure className="profile-img" >
                <img src={toAbsoluteUrl ('/images/image.png')} alt="logo-img" />
            </figure>
        <p>Children welfare</p>
        </div>,
        creat: "charity",
        logo: 
        <div className="profile-list-box" >
         <p>demo</p>
        </div> ,
        date:"21 Dec, 21  5:30 PM",
        tid: '1988',
    },
]

  return (
    <>
      <div>
        <div className='top-box' >
          <Breadcrumb list={list} /> 
          <h2>Leadership Management </h2>
        </div>
        <div className='section-inner cause-section'>
          <div className='d-flex justify-content-between' >
            <div className='search-box'>
              <input type="text" placeholder='search'  className='search-input' />
            </div>
            <div className='div-btn-box'>
              <Link to="/content_management/add_leadership" className='btn' title='add' > <Plus /> Add New Leadership  </Link>
              {/* <button type='button' className='btn export' title='export' > Export  </button> */}
            </div>
          </div>
        <DataTable
          border
          columns={columns}
          data={data}
          pagination
          customStyles={customStyles}
          dense
        />
        </div>
      </div>
    </>
  )
}

export default Leadership;