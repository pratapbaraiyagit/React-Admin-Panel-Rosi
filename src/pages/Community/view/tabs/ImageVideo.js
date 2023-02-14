import React from 'react'
import { toAbsoluteUrl } from '../../../../utils'

const ImageVideo = () => {
  return (
    <>
        <div className='community-box image-box'>
          <div className='post-box'>
              <div className='post-area-box' >
                <div className='post-inner'>
                      <div>
                          <ul className='post-list'>
                              <li>
                                  <figure className='upload-img'>
                                    <img src={toAbsoluteUrl('/images/unsplash-1.png')} alt="world-img" />
                                  </figure>
                              </li>
                              <li>
                                  <figure className='upload-img'>
                                    <img src={toAbsoluteUrl('/images/unsplash-1.png')} alt="world-img" />
                                  </figure>
                              </li>
                              <li>
                                  <figure className='upload-img'>
                                    <img src={toAbsoluteUrl('/images/unsplash-1.png')} alt="world-img" />
                                  </figure>
                              </li>
                              <li>
                                  <figure className='upload-img'>
                                    <img src={toAbsoluteUrl('/images/unsplash-1.png')} alt="world-img" />
                                  </figure>
                              </li>
                              <li>
                                  <figure className='upload-img'>
                                    <img src={toAbsoluteUrl('/images/unsplash-1.png')} alt="world-img" />
                                  </figure>
                              </li>
                              <li>
                                  <figure className='upload-img'>
                                    <img src={toAbsoluteUrl('/images/unsplash-1.png')} alt="world-img" />
                                  </figure>
                              </li>
                              <li>
                                  <figure className='upload-img'>
                                    <img src={toAbsoluteUrl('/images/unsplash-1.png')} alt="world-img" />
                                  </figure>
                              </li>
                          </ul>
                      </div>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default ImageVideo