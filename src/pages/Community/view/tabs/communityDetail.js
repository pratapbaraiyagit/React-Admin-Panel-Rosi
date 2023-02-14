import React, { useState } from 'react'
import { renderField, renderSelectField, rendertextarea } from '../../../../components/forms'
import { toAbsoluteUrl } from '../../../../utils'
import { Field,Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import Upload from '../../../../components/svg/upload';
import Pedit from '../../../../components/svg/postedit';
import ImgUpload from '../../../../components/common/img-upload';
import Dmodel from '../../../../components/common/delete';

const CommunityDetail = () => {

  const [ishide , sethide] = useState(0)
  const [ismodel , setmodel] = useState(false)

  const onSubmit =(value) => {
    console.log('value ',value);
  }

  const required = (value, fieldName=' ') => (value ? undefined : `Required ${fieldName}`);

  const handleClick = (e) => {
    console.log('handleClick: ',e);
    if(e.target.id == ishide)
     sethide(0)
     else 
    sethide(e.target.id);
  }



  return (
    <>
        <div className='community-box'>
          <div className='post-box'>
              <div className='d-flex align-items-end w-100'>
                <figure className='post-img'>
                  <img src={toAbsoluteUrl('/images/world.png')} alt="world-img" />
                </figure>
                <div className='d-flex w-100 flex-column' >
                    <span>Post Anything Related to Community...</span>
                    <div className='main-box-div'>
                      <Form
                        onSubmit={onSubmit}
                      >
                      {({handleSubmit }) => (
                              <form onSubmit={handleSubmit} >
                                  <div className='input-list d-flex flex-wrap w-100' >
                                      <div className='col-12 col-div p-0'>
                                          <Field 
                                          name="communityname"
                                          type="text"
                                          placeholder="What’s on your mind? "
                                          component={renderField}
                                          validate={ (value) => required(value,(''))}
                                          className="form-grp form-input-box"
                                          inputclass="input-box"
                                          />
                                      </div>
                                    </div>
                              </form>
                              
                          ) }
                      </Form> 
                      <div className='icon-box'>
                        <i title='edit' ><Pedit /></i>
                        <i title='upload' onClick={() => setmodel(!ismodel)} ><Upload /></i>
                      </div>
                    </div>
                      
                </div>
              </div>
              <div className='post-area-box' >
                <div className='post-title'>
                  <h4>My Member</h4>
                  <span>Switch to My Post</span>
                </div>
                <div className='post-inner'>
                      <div>
                          <ul className='post-list'>
                              <li>
                                  <div className='box-post'>
                                      <div className='title-post' >
                                        <div className='d-flex flex-wrap'>
                                          <figure className='post-img'>
                                            <img src={toAbsoluteUrl('/images/world.png')} alt="world-img" />
                                          </figure>
                                          <div className='samll-title' >
                                              <h5>Help Save the world</h5>
                                              <span>12 April at 12:30 AM</span>
                                          </div>
                                        </div>
                                        <div className='post-menu-box'>
                                            <ul className='dots-li' id={1} onClick={handleClick} >
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                            <ul className={`submenu-list ${ishide == 1 ? " open-menu ": ""}`} >
                                              <li> <Link to="#" onClick={() => sethide(!ishide)} > Send Message </Link> </li>
                                              <li> <Link to="#" onClick={() => sethide(!ishide)} > Hide Post </Link> </li>
                                              <li> <Link to="#" onClick={() => {sethide(!ishide);  setmodel(!ismodel);}} > Delete Post </Link> </li>
                                              <li> <Link to="#" onClick={() => sethide(!ishide)} > Edit Post </Link> </li>
                                            </ul>
                                        </div>
                                      </div>
                                      <div className='inner-postbox'>
                                          <p>
                                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used Lorem ipsum may be 
                                            used as a placeholder before the final copy is publishing and graphic design, Lorem ipsum is a 
                                            placeholder text commonly used Lorem ipsum is a Lorem ipsum Lorem ipsum Lorem ipsumLorem is a 
                                            ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                          </p>
                                          <figure className='post-img'>
                                            <img src={toAbsoluteUrl('/images/post.png')} alt="post-img" />
                                          </figure>
                                      </div>
                                      <div className='social-box'>
                                        <div>
                                          <ul className='social-list'>
                                              <li>
                                                  <div className='d-flex flex-wrap align-items-center'>
                                                    <figure className='social-img'>
                                                      <img src={toAbsoluteUrl('/images/chat-bubble.svg')} alt="chat-img" />
                                                    </figure>
                                                    <span>25 Comments</span>
                                                  </div>
                                              </li>
                                              <li>
                                                  <div className='d-flex flex-wrap align-items-center'>
                                                    <figure className='social-img'>
                                                      <img src={toAbsoluteUrl('/images/chat-bubble.svg')} alt="chat-img" />
                                                    </figure>
                                                    <span>25 Comments</span>
                                                  </div>
                                              </li>
                                          </ul>
                                        </div>
                                        <div className='comment-box' >
                                           <input className='input-box comment-input' placeholder='Write your comment.....' />
                                           <button type='button' className='btn-text' >Add Your comment</button>
                                        </div>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div className='box-post'>
                                      <div className='title-post' >
                                        <div className='d-flex flex-wrap'>
                                          <figure className='post-img'>
                                            <img src={toAbsoluteUrl('/images/world.png')} alt="world-img" />
                                          </figure>
                                          <div className='samll-title' >
                                              <h5>Help Save the world</h5>
                                              <span>12 April at 12:30 AM</span>
                                          </div>
                                        </div>
                                        <div className='post-menu-box'>
                                            <ul className='dots-li' id={2} onClick={handleClick} >
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                            <ul className={`submenu-list ${ishide == 2 ? " open-menu ": ""}`} >
                                              <li> <Link to="#" onClick={() => sethide(0)} > Send Message </Link> </li>
                                              <li> <Link to="#" onClick={() => sethide(0)} > Hide Post </Link> </li>
                                              <li> <Link to="#" onClick={() => sethide(0)} > Delete Post </Link> </li>
                                              <li> <Link to="#" onClick={() => sethide(0)} > Edit Post </Link> </li>
                                            </ul>
                                        </div>
                                      </div>
                                      <div className='inner-postbox'>
                                          <p>
                                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used Lorem ipsum may be 
                                            used as a placeholder before the final copy is publishing and graphic design, Lorem ipsum is a 
                                            placeholder text commonly used Lorem ipsum is a Lorem ipsum Lorem ipsum Lorem ipsumLorem is a 
                                            ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                          </p>
                                          <figure className='post-img'>
                                            <img src={toAbsoluteUrl('/images/post.png')} alt="post-img" />
                                          </figure>
                                      </div>
                                      <div className='social-box'>
                                        <div>
                                          <ul className='social-list'>
                                              <li>
                                                  <div className='d-flex flex-wrap align-items-center'>
                                                    <figure className='social-img'>
                                                      <img src={toAbsoluteUrl('/images/chat-bubble.svg')} alt="chat-img" />
                                                    </figure>
                                                    <span>25 Comments</span>
                                                  </div>
                                              </li>
                                              <li>
                                                  <div className='d-flex flex-wrap align-items-center'>
                                                    <figure className='social-img'>
                                                      <img src={toAbsoluteUrl('/images/chat-bubble.svg')} alt="chat-img" />
                                                    </figure>
                                                    <span>25 Comments</span>
                                                  </div>
                                              </li>
                                          </ul>
                                        </div>
                                        <div className='comment-box' >
                                           <input className='input-box comment-input' placeholder='Write your comment.....' />
                                           <button type='button' className='btn-text' >Add Your comment</button>
                                        </div>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                </div>
              </div>
          </div>
        </div>

        {/* upload image and video  */}
        <div className= {`model-area upload-model ${ismodel ? "open-model" :""}`} >
                <div className= "model-box" >
                    <div className='modele-text-box' >
                        <h2>Add Post</h2>
                        <div className='form-area'>
                    <Form
                            onSubmit={onSubmit}
                                //validate={values} 
                                >
                            {({handleSubmit }) => (
                                    <form onSubmit={handleSubmit} >
                                        <div className='input-list d-flex flex-wrap' >
                                            <div className='col-12 col-div'>
                                                <label className='label-text'> <span>*</span> Upload Image and Video </label>
                                                <ImgUpload />
                                                {/* <span className='img-text'>Recommanded resolution is 640*640 with file size less than 2MB, Add multiple image up-to 10</span> */}
                                            </div>
                                            <div className='col-12 col-div'>
                                                <label className='label-text'> <span>*</span> Description</label>
                                                <Field 
                                                name="textfield"
                                                component={rendertextarea}
                                                placeholder="Enter your Description"
                                                validate={(value) => required(value, "please Enter your Description")}
                                                className="form-grp"
                                                inputclass="input-box text-area-box"
                                                />
                                            </div>
                                          </div>
                                        <div className='d-flex flex-wrap form-btn-box' >
                                            <Link to='/community' className='link-btn'>Save</Link>
                                            <Link to='/community' className='link-btn cancel'>Cancel</Link>
                                        </div>
                                    </form>
                                    
                                ) }
                
                    </Form> 
                </div>
                    </div>
                    
                </div>
        </div>
        
        {/* delete-model */}
        <Dmodel name="Are you sure delete this post" setmodel={setmodel} ismodel={ismodel} />
    </>
  )
}

export default CommunityDetail