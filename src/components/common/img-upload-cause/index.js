import React, { useState } from 'react'
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from 'react-redux';
import { doUploadImageCause } from '../../../actions/cause';
import { doUploadImage } from '../../../actions/registration';
import { UPLOAD_URL } from '../../../constants/api';
import Delete from '../../svg/delete';
import Edit from '../../svg/edit';
import './upload.scss'

const ImgUploadCause = ({ multiple, setImages, images,setapiImageName, isEdit,oldImages, setOldImages: setOldCauseImages, setDeleteImage, setImg, moduleName }) => {

    const mediaURL = useSelector((state) => state.metaReducer.mediaURL)

    const dispatch = useDispatch();

    const maxNumber = 5;

    const onChange = (imageList, addUpdateIndex) => {
        // console.log("🚀 ~ file: index.js ~ line 20 ~ onChange ~ imageList", imageList)
        setImages(imageList);
        const data = { image: [imageList[addUpdateIndex]], moduleName: moduleName }
        dispatch(doUploadImageCause(data))
            .then(res => {
                // console.log("res------------------", res)
                if(!isEdit)
                setImg({ name: res.data.name, url: res.data.name })
                else {
                 setImg(imageList)
                 setapiImageName({ name: res.data.name, url: res.data.name })
                }
                // setImg({name:res.data.name});
            })
        // console.log("🚀 ~ file: index.js ~ line 20 ~ onChange ~ imageList", imageList)

    };

    const handleOldDelete = (e, image) => {
        e.preventDefault()
        let filteredImages = oldImages[0]?.images?.name.filter(o => o !== image)
        setOldCauseImages(filteredImages)
        setDeleteImage(image)
    }

    return (
        <>
            <ImageUploading
                value={images}
                onChange={onChange}
                multiple={multiple}
                maxNumber={maxNumber}
                dataURLKey="url"
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
                    <div className="upload__image-wrapper">
                        {/* {console.log("heyyy", imageList)} */}
                        <div className='img-map-box'>
                            {oldImages?.length > 0 && multiple ? oldImages?.map((image, index) => (
                                <div key={index} imageListlassName="image-item">
                                    <img src={mediaURL + "causeLogo/" + image} alt="Image" width="100" />
                                    <div className="image-item__btn-wrapper">
                                        <button className='img-btn' onClick={e => handleOldDelete(e, image)}><Delete /></button>
                                    </div>
                                </div>
                            )) : <div></div>}
                            {oldImages?.length && !multiple && imageList.length === 0 ? oldImages?.map((image, index) => (
                                image && <div key={index} className="image-item">
                                    <img src={mediaURL+"causeLogo/"+image?.name} alt="777" width="100" />
                                    <div className="image-item__btn-wrapper">
                                        {/* <button className='img-btn' onClick={() => onImageUpdate(index)}> <Edit /> </button> */}
                                        {/* <button className='img-btn' onClick={e => handleOldDelete(e, image)}><Delete /></button> */}
                                    </div>
                                </div>
                            )) : <div></div>}

                            {imageList?.length > 0 && imageList?.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image.url} alt="" width="100" />
                                    <div className="image-item__btn-wrapper">
                                        <button className='img-btn' onClick={() => onImageRemove(index)} title="delete" ><Delete /></button>
                                    </div>
                                </div>
                            ))}
                            {imageList?.name ? <img src={imageList?.name} alt="" width="100" /> : ''}
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

export default ImgUploadCause

