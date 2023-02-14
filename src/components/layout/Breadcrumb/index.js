import React from 'react'
import { Link } from 'react-router-dom';
import './breadcrumb.scss';

const Breadcrumb = (props) => {

  const {list} = props

  return (
    <>
        <div className='breadcrumb-box'>
            <ul className='breadcrumb-ul'>
                {/* <li> <Link to="#">Home</Link> </li> */}
                {
                  list?.map( (i) => (
                    <li>
                      { !i.isactive ? <Link to={i.link}>{i.name}</Link> :  <h4>{i.name}</h4> } 
                    </li>
                  ))
                }
            </ul>
        </div>
    </>
  )
}
export default Breadcrumb
