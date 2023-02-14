import React, { useState } from 'react'
import ImageUploading from "react-images-uploading";
import { useDispatch } from 'react-redux';
import { doUploadImage } from '../../../actions/registration';
import { UPLOAD_URL } from '../../../constants/api';
import Delete from '../../svg/delete';
import Edit from '../../svg/edit';
import './upload.scss'

const ImgUpload = ({ multiple, setImages, images, oldImages, setOldImages, setDeleteImage, setImg, moduleName, oldLogo }) => {
    const dispatch = useDispatch();

    const maxNumber = 5;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        console.log('setImages: ', setImages);
        const data = { image: [imageList[addUpdateIndex[0]]], moduleName: moduleName }
        dispatch(doUploadImage(data))
            .then(res => {
                console.log("res", res.data.name)
                if (multiple) {
                    setImg(prev => [...prev, { name: res.data.name, url: res.data.name }])
                }
                else {
                    setImg(res.data.name);
                }
            })
    };

    const handleOldDelete = (e, image) => {
        e.preventDefault()
        let filteredImages = oldImages.filter(o => o !== image)
        setOldImages(filteredImages)
        setDeleteImage(image)
    }


    return (
        <>
            <ImageUploading
                multiple={multiple}
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg", "svg", "png"]}
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                    errors
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                        <div className='img-map-box'>

                            {/* {oldImages && !multiple && 
                                <div key={index} className="image-item">
                                    <img src={`${image}`} alt="" width="100" />
                                    <div className="image-item__btn-wrapper">
                                        <button className='img-btn' onClick={() => onImageUpdate(index)}> <Edit /> </button>
                                        <button className='img-btn' onClick={e => handleOldDelete(e, image)}><Delete /></button>
                                    </div>
                                </div>} */}

                            {oldLogo && !imageList.length ?   <div className="image-item">
                                    <img src={oldLogo} alt="" width="100" />
                                    <div className="image-item__btn-wrapper">
                                        {/* <button className='img-btn' onClick={() => onImageUpdate(index)} title="edit" > <Edit /> </button> */}
                                        {/* <button className='img-btn' onClick={() => onImageRemove(index)} title="delete" ><Delete /></button> */}
                                    </div>
                                </div>
                                : ''}

                            {imageList?.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image.data_url} alt="" width="100" />
                                    <div className="image-item__btn-wrapper">
                                        {/* <button className='img-btn' onClick={() => onImageUpdate(index)} title="edit" > <Edit /> </button> */}
                                        <button className='img-btn' onClick={() => onImageRemove(index)} title="delete" ><Delete /></button>
                                    </div>
                                </div>
                            ))}

                            <button
                                type='button'
                                className='upload-btn'
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                +
                            </button>
                        </div>
                    </div>
                )}
            </ImageUploading>
        </>
    )
}

export default ImgUpload

