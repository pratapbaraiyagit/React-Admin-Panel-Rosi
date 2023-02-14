import React from 'react'
import './breadcrumb.scss';


// export default BreadcrumbCharityCategory

export const BreadcrumbCause = () => {
  return (
    <>
        <div className='breadcrumb-box'>
            <ul className='breadcrumb-ul'>
                <li>Master Management</li>
                <li className='active' >Cause Management</li>
            </ul>
        </div>
    </>
  )
}

export const BreadcrumbAdd = () => {
  return (
    <>
        <div className='breadcrumb-box'>
            <ul className='breadcrumb-ul'>
                <li>Cause</li>
                <li className='active' >Cause Add</li>
            </ul>
        </div>
    </>
  )
}

export const BreadcrumbEdit = () => {
  return (
    <>
        <div className='breadcrumb-box'>
            <ul className='breadcrumb-ul'>
                <li>Cause</li>
                <li className='active' >Cause Edit</li>
            </ul>
        </div>
    </>
  )
}

export const BreadcrumbCharityManage = () => {
  return (
    <>
        <div className='breadcrumb-box'>
            <ul className='breadcrumb-ul'>
                <li>Master Management</li>
                <li className='active' >Charity Management</li>
            </ul>
        </div>
    </>
  )
}

export const BreadcrumbCharityManageAdd = () => {
  return (
    <>
        <div className='breadcrumb-box'>
            <ul className='breadcrumb-ul'>
                <li>Charity</li>
                <li className='active' >Charity Add</li>
            </ul>
        </div>
    </>
  )
}

export const BreadcrumbCharityManageEdit = () => {
  return (
    <>
        <div className='breadcrumb-box'>
            <ul className='breadcrumb-ul'>
                <li>Charity</li>
                <li className='active' >Charity Edit</li>
            </ul>
        </div>
    </>
  )
}