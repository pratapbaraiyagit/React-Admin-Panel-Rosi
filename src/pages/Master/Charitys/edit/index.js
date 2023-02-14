import React, { useState, useEffect, useRef } from 'react'
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { renderField, renderNumberField, renderSelectField } from '../../../../components/forms'
import Breadcrumb from '../../../../components/layout/Breadcrumb'
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tookit from '../../../../components/svg/tookit';
import ImgUpload from '../../../../components/common/img-upload';
import { toAbsoluteUrl } from '../../../../utils';
import Encompass from '../../../Registration/tabs/encompass';
import Star from '../../../Registration/tabs/star';
// import { charityManagementEdit } from '../../../'
import { charityManagementEdit, charityManageUpdate } from '../../../../actions/charity';
import ImgUploadCause from '../../../../components/common/img-upload-cause';
import { addTOCategory, addTOCause, addTOCity, addTOCountry, addTOState } from '../../../../actions/registration';
import ImgUploadCharityManage from '../../../../components/common/img-upload-charity-manage';
import EncompassEdit from './encompass';
import StarEdit from './star';
import moment from 'moment';
import { toast } from 'react-toastify';


const CharityEdit = (props) => {
    let { id } = useParams();
    const formRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const editCharityManage = useSelector((state) => state.ChairtyReducer.editCharityManage.data)
    console.log("🚀 ~ file: index.js ~ line 29 ~ CharityEdit ~ editCharityManage", editCharityManage)
    const editEncompassData = useSelector((state) => state.ChairtyReducer.editCharityManage?.data?.charityRatings[0])

    const [causeImages, setCauseImages] = useState();
    const [oldCauseImages, setOldCauseImages] = useState();
    const [images, setImages] = useState([]);
    const [apiImageName, setapiImageName] = useState();
    const [imageserror, setImageerror] = useState("")
    const [deleteImage, setDeleteImage] = useState([])

    const [cause, setCause] = useState([])
    const [category, setCategory] = useState([])
    const [intialcause, setintialCause] = useState([]);
    const [initalcategory, setinitialCategory] = useState([]);

    const [country, setCountry] = useState([])
    const [state, setState] = useState([])
    const [city, setCity] = useState([])
    const [selectedCountry, setselectedCountry] = useState()
    const [selectedState, setselectedState] = useState()

    const [financeAccountability, setFinanceAccountability] = useState([0])
    const [impactResults, setImpactResults] = useState([0])
    const [leadershipAdaptability, setLeadershipAdaptability] = useState([0])
    const [cultureCommunity, setCultureCommunity] = useState([0])
    const [average, setavg] = useState('')

    const [financeRating, setFinanceRating] = useState(0);
    const [accountabilityRating, setAccountabilityRating] = useState(0);

    useEffect(() => {
        let avg = (financeAccountability[0] + impactResults[0] + leadershipAdaptability[0] + cultureCommunity[0]) / 4
        setavg([avg])
    }, [financeAccountability, impactResults, leadershipAdaptability, cultureCommunity])

    useEffect(() => {
        if (editCharityManage) {
            setAccountabilityRating(editCharityManage?.charityRatings[0]?.starRating?.accountability)
            setFinanceRating(editCharityManage?.charityRatings[0]?.starRating?.finance)
        }
    }, [editCharityManage])
    const [isradio, setradio] = useState(1);

    useEffect(() => {
        if (editCharityManage) {
            setFinanceAccountability([editCharityManage?.charityRatings?.[0]?.encompass?.financeAccountability]);
            setImpactResults([editCharityManage?.charityRatings?.[0]?.encompass?.impactResults])
            setCultureCommunity([editCharityManage?.charityRatings?.[0]?.encompass?.cultureCommunity])
            setLeadershipAdaptability([editCharityManage?.charityRatings?.[0]?.encompass?.leadershipAdaptability])
        }
    }, [editCharityManage])

    useEffect(() => {
        dispatch(charityManagementEdit(id))
    }, [id]);

    useEffect(() => {
        setOldCauseImages([editCharityManage?.charityDetails?.logo])
    }, [editCharityManage?.charityDetails?.logo])

    useEffect(() => {
        setTimeout(() => {
            if (formRef.current) {
                formRef.current.mutators.setValue('country', { label: editCharityManage?.charityDetails?.address?.country, value: editCharityManage?.charityDetails?.address?.country })
                formRef.current.mutators.setValue('state', { label: editCharityManage?.charityDetails?.address?.state, value: editCharityManage?.charityDetails?.address?.state })
                formRef.current.mutators.setValue('city', { label: editCharityManage?.charityDetails?.address?.city, value: editCharityManage?.charityDetails?.address?.city })
            }
        }, 1000);
    }, [editCharityManage])

    const fetchCountry = (id) => {
        dispatch(addTOCountry())
            .then(res => {
                const data = res.data
                let countryArr = [];
                data.map((val, ind) => {
                    countryArr.push({ value: val.id, label: val.name, countryCode: val.phone_code })
                })
                setCountry(countryArr)
            })
    }

    const fetchState = (data) => {
        dispatch(addTOState(data))
            .then(res => {
                const data = res.data
                let stateArr = [];
                data.map((val, ind) => {
                    stateArr.push({ value: val.id, label: val.name })
                })
                setState(stateArr)
            })
    }

    const fetchCity = (data) => {
        dispatch(addTOCity(data))
            .then(res => {
                const data = res.data
                let cityArr = [];
                data.map((val, ind) => {
                    cityArr.push({ value: val.id, label: val.name })
                })
                setCity(cityArr)
            })
    }

    const fetchCause = () => {
        dispatch(addTOCause({ page: 1, limit: 10, search: "" }))
            .then(res => {
                const data = res.data;
                let causeArr = [];

                data?.causeFilter?.map((val, ind) => {
                    causeArr.push({ value: val._id, label: val.causename })
                })

                setCause(causeArr)
            })
    }

    const fetchCategory = () => {
        dispatch(addTOCategory({ page: 1, limit: 10, search: "" }))
            .then(res => {
                const data = res.data;
                let categoryArr = [];

                data?.categoryFilter?.map((val, ind) => {
                    categoryArr.push({ value: val._id, label: val.category_name })
                })
                setCategory(categoryArr)
            })
    }

    useEffect(() => {
        setintialCause(
            editCharityManage?.causesDetails?.map((item) => ({
                value: item._id,
                label: item.causename,
            }))
        );
        setinitialCategory(
            editCharityManage?.charityCategories?.map((item) => ({
                value: item._id,
                label: item.category_name,
            }))
        );
    }, [editCharityManage]);

    useEffect(() => {
        fetchCause();
        fetchCategory();
    }, [])

    useEffect(() => {
        fetchCountry()
    }, [])

    useEffect(() => {
        fetchState({ countryId: selectedCountry?.value })
    }, [selectedCountry])

    useEffect(() => {
        fetchCity({ stateId: selectedState?.value })
    }, [selectedState])

    useEffect(() => {
        let initialCountry = [];
        if (country?.length) {
            initialCountry = country.filter((val) => val.value == editCharityManage?.charityDetails?.address?.country)
            setselectedCountry(initialCountry[0]?.id)
        }

    }, [editCharityManage, country])

    useEffect(() => {
        let initialState = [];
        if (state?.length) {
            initialState = state.filter((val) => val.label == editCharityManage?.charityDetails?.address?.state)
            setselectedState(initialState[0]?.id)
        }
    }, [editCharityManage, state])


    const gradeReceiveOptions = [
        { value: '1', label: 'A range = Excellent' },
        { value: '2', label: 'B range = Good' },
        { value: '3', label: 'C range = Satisfactory/Average' },
        { value: '4', label: 'D range= Unsatisfactory / Poor' },
        { value: '5', label: 'F = Failing' }
    ]
    const governanceBenchmarkOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    const transperancyBenchmarkOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];

    const num = 50;
    let gradeReceiveLable = ''
    switch (editEncompassData?.gradeReceive) {
        case 1:
            gradeReceiveLable = "A range = Excellent"
            break
        case 2:
            gradeReceiveLable = 'B range = Good'
            break
        case 3:
            gradeReceiveLable = 'C range = Satisfactory/Average'
            break
        case 4:
            gradeReceiveLable = 'D range= Unsatisfactory / Poor'
            break
        case 5:
            gradeReceiveLable = 'F = Failing'
            break

        default:
            break;
    }
    let governanceBenchmarkLable = ''
    switch (editEncompassData?.governanceBenchmark) {
        case false:
            governanceBenchmarkLable = "No"
            break;
        case true:
            governanceBenchmarkLable = "Yes"
            break
        default:
            break;
    }
    let transperancyBenchmarkLable = ""
    switch (editEncompassData?.transperancyBenchmark) {
        case false:
            transperancyBenchmarkLable = "No"
            break;
        case true:
            transperancyBenchmarkLable = "Yes"
            break
        default:
            break;
    }

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`);

    const onSubmit = (value) => {
        console.log('value ', value);

        const data = {
            charityId: id,
            userName: value.UserName,
            charityName: value.CharityName,
            charityPersonName: value.CharityPersonName,
            charityEmailAddress: value.CharityEmailAddress,
            // isCreatedByAdmin: true,
            adminVerification: "Approve",
            description: value.CharityDescription,
            brief_description: value.CharityBriefDescription,
            phoneno: Number(`${value?.PhoneNumber?.toString()?.replace(/[^\d]/g, '')}`),
            tagline: value.CharityTagLine,
            countryCode: value.country,
            logo: images?.name,

            address: {
                floor: value.CharityAddress,
                number: value.CharityAddress,
                street: value.CharityAddress,
                city: value?.city?.label,
                state: value.state?.label,
                zipcode: value.zipcode,
                country: value.country?.label,
            },

            website: value.CharityWebsite,
            charityFilter: value.CharityFilter?.value,
            charityContribution: Number(value.CharityContribution),
            formedYear: Number(moment(value?.CharityFormedyear)?.format("YYYY")),
            taxId: value.TaxId,
            categoryId: value?.CharityCategory?.value,
            relatedCause: value?.causeList?.map((item) => item.value),
            ratingType: isradio,

            encompass: {
                financeAccountability: financeAccountability[0],
                impactResults: impactResults[0],
                leadershipAdaptability: leadershipAdaptability[0],
                cultureCommunity: cultureCommunity[0]
            },
            guideStar: Number(value.radio),
            governanceBenchmark: value.governanceBenchmark.value === 'Yes' ? true : false,
            gradeReceive: Number(value.gradeReceive.value),
            transperancyBenchmark: value.transperancyBenchmark.value === 'Yes' ? true : false,

            starRating: {
                finance: financeRating,
                accountability: accountabilityRating,
            },

        }
        dispatch(charityManageUpdate(data, id))
            .then((res) => {
                // dispatch(causeListing()) // this for double api hit
                toast.success(res?.message || 'Success')
                navigate('/master/charity_management')
            })
            .catch((err) => {
                toast.error(err?.message || "Something went wrong")
            })
    }
    return (
        <>
            <div>
                <div className='top-box' >
                    <Breadcrumb />
                    <h2>Charity Edit </h2>
                </div>
                <div className='section-inner'>
                    <div className='form-area'>
                        <Form
                            mutators={{
                                // expect (field, value) args from the mutator
                                setValue: ([field, value], state, { changeValue }) => {
                                    changeValue(state, field, () => value)
                                }
                            }}
                            onSubmit={onSubmit}
                            initialValues={{
                                userName: editCharityManage?.userName || '',
                                charityName: editCharityManage?.charityName || '',
                                charityPersonName: editCharityManage?.charityPersonName || '',
                                charityEmailAddress: editCharityManage?.charityEmailAddress || '',
                                brief_description: editCharityManage?.charityDetails?.brief_description || '',
                                description: editCharityManage?.charityDetails?.description || '',
                                phoneno: editCharityManage?.charityDetails?.phoneno || '',
                                tagline: editCharityManage?.charityDetails?.tagline || '',
                                // address: editCharityManage?.charityDetails?.address?.floor || '',
                                CharityAddress: editCharityManage?.charityDetails?.address?.floor || '',
                                
                                zipcode: editCharityManage?.charityDetails?.address?.zipcode || '',
                                website: editCharityManage?.charityDetails?.website || '',
                                formedYear: editCharityManage?.charityDetails?.formedYear || '',
                                taxId: editCharityManage?.charityDetails?.taxId || '',
                                charityFilter: editCharityManage?.charityDetails?.charityFilter || '',

                                causeList: intialcause || "",

                                charityCategory: { value: editCharityManage?.charityCategories?.[0]?._id, label: editCharityManage?.charityCategories?.[0]?.category_name },
                                // cause: options,
                                charityCategory: initalcategory || '',

                                CharityContribution: editCharityManage?.charityDetails?.charityContribution || "",

                                governanceBenchmark: { value: editCharityManage?.charityRatings?.[0]?.governanceBenchmark, label: governanceBenchmarkLable } || "",
                                gradeReceive: { value: editCharityManage?.charityRatings?.[0]?.gradeReceive, label: gradeReceiveLable } || "",
                                transperancyBenchmark: { value: editCharityManage?.charityRatings?.[0]?.transperancyBenchmark, label: transperancyBenchmarkLable } || "",
                                radio: editCharityManage?.charityRatings?.[0]?.guideStar?.toString()

                                // logo: editCharityManage?.char


                            }}
                        //validate={values} 
                        >
                            {({ handleSubmit, form, values }) => {
                                console.log("🚀 ~ file: index.js ~ line 400 ~ CharityEdit ~ values", values)
                                formRef.current = form
                                return <form onSubmit={handleSubmit} >
                                    <div className='input-list d-flex flex-wrap' >
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> User name</label>
                                            <Field
                                                name="userName"
                                                type="text"
                                                placeholder="user name"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity name</label>
                                            <Field
                                                name="charityName"
                                                type="text"
                                                placeholder="charity name"
                                                component={renderField}
                                                validate={(value) => required(value, ('charity name'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity person name</label>
                                            <Field
                                                name="charityPersonName"
                                                type="text"
                                                placeholder="charity person name"
                                                component={renderField}
                                                validate={(value) => required(value, ('charity person name'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity email address</label>
                                            <Field
                                                name="charityEmailAddress"
                                                type="text"
                                                placeholder="charity email address"
                                                component={renderField}
                                                validate={(value) => required(value, ('charity email address'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity brief description </label>
                                            <Field
                                                name="brief_description"
                                                type="text"
                                                placeholder="chairty description"
                                                component={renderField}
                                                validate={(value) => required(value, ('chairty brief description'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity description </label>
                                            <Field
                                                name="description"
                                                type="text"
                                                placeholder="Charity description"
                                                component={renderField}
                                                validate={(value) => required(value, ('Charity description'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Phone number </label>
                                            <Field
                                                name="phoneno"
                                                placeholder="Phone Number"
                                                component={renderNumberField}
                                                formatStyle={"(###) ###-####"}
                                                className="form-grp"
                                                inputclass="input-box"
                                                readOnly={true}
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity tag line </label>
                                            <Field
                                                name="tagline"
                                                type="text"
                                                placeholder="charity tag line"
                                                component={renderField}
                                                validate={(value) => required(value, ('charity tag line'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Chairty logo </label>
                                            <ImgUploadCharityManage
                                                multiple={false}
                                                oldImages={oldCauseImages}
                                                setImg={setImages}
                                                isEdit={true}
                                                setapiImageName={setapiImageName}
                                                setOldCauseImages={images => setOldCauseImages(images)}
                                                setImages={setCauseImages}
                                                setDeleteImage={image => setDeleteImage([...deleteImage, image])}
                                                images={images}
                                                moduleName='charityLogo'
                                            />
                                        </div>
                                        <div className='col-12 col-div'>
                                            <label className='label-text'> <span>*</span> charity address </label>
                                            <Field
                                                name="CharityAddress"
                                                type="text"
                                                placeholder="charity address "
                                                component={renderField}
                                                validate={(value) => required(value, ('Charity Address'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Country </label>
                                            {/* <Field
                                                name="country"
                                                type="text"
                                                placeholder="country"
                                                component={renderField}
                                                validate={(value) => required(value, ('country'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            /> */}

                                            <Field
                                                name="country"
                                                placeholder="Country"
                                                isCountryField={true}
                                                setselectedCountry={setselectedCountry}
                                                component={renderSelectField}
                                                mutator={form.mutators.setValue}
                                                className="form-grp col-grp"
                                                inputclass="input-box"
                                                options={country}
                                                isMulti={false}
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> State </label>
                                            <Field
                                                name="state"
                                                type="text"
                                                placeholder="State"
                                                mutator={form.mutators.setValue}
                                                isStateField={true}
                                                setselectedState={setselectedState}
                                                component={renderSelectField}
                                                className="form-grp col-grp"
                                                // inputclass="input-box"
                                                options={state}
                                                isMulti={false}
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> City </label>
                                            <Field
                                                name="city"
                                                placeholder="City"
                                                component={renderSelectField}
                                                className="form-grp col-grp"
                                                inputclass="input-box select-input-box"
                                                options={city}
                                                isMulti={false}
                                            />

                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Zip code </label>
                                            <Field
                                                name="zipcode"
                                                type="number"
                                                placeholder="zip code"
                                                component={renderField}
                                                validate={(value) => required(value, ('zip code'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity website </label>
                                            <Field
                                                name="website"
                                                type="text"
                                                placeholder="charity website"
                                                component={renderField}
                                                validate={(value) => required(value, ('charity website'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity formed year </label>
                                            {/* <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                className="input-box"
                                            name="formedYear"
                                            /> */}
                                            <Field
                                                name="formedYear"
                                                type="text"
                                                placeholder="Charity Formed year"
                                                component={renderNumberField}
                                                className="form-grp"
                                                inputclass="input-box"
                                                formatStyle={'####'}
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity category </label>
                                            {/* <Field
                                                isMulti={false}
                                                name="charityCategory"
                                                options={category}
                                                component={renderSelectField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            /> */}
                                            <Field
                                                name="charityCategory"
                                                component={renderSelectField}
                                                validate={(value) => required(value, "Charity Category")}
                                                className="basic-multi-select"
                                                options={category}
                                                isMulti={false}
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Tax id </label>
                                            <Field
                                                name="taxId"
                                                type="text"
                                                placeholder="tax id"
                                                component={renderField}
                                                validate={(value) => required(value, ('tax id'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity Filter </label>
                                            <Field
                                                name="charityFilter"
                                                type="text"
                                                placeholder="Charity Filter"
                                                component={renderField}
                                                validate={(value) => required(value, ('Charity Filter'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Cause</label>
                                            <Field
                                                name="causeList"
                                                component={renderSelectField}
                                                validate={(value) => required(value, "Cause Related")}
                                                className="basic-multi-select"
                                                options={cause}
                                                isMulti={true}
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Contribution amount required </label>
                                            <Field
                                                name="CharityContribution"
                                                type="text"
                                                placeholder="Charity Contribution"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>

                                        <div className='col-md-6 col-div rating-inner-box' >
                                            <label className='label-text'> <span>*</span> Rating </label>
                                            <div className='d-flex align-items-center inner-div'>
                                                <div>
                                                    <label className="check-label" onClick={() => setradio(1)}>Encompass Rating
                                                        <input type="radio" name='action' checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="check-label" onClick={() => setradio(2)}>Star Rating
                                                        <input type="radio" name='action' />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12 col-div rating-inner-box'>
                                            {
                                                // isradio === 1 &&
                                                editCharityManage?.charityRatings[0]?.ratingType === 1 ? (
                                                    <div className='d-flex flex-wrap w-100'>
                                                        <EncompassEdit
                                                            financeAccountability={financeAccountability}
                                                            setFinanceAccountability={setFinanceAccountability}
                                                            impactResults={impactResults}
                                                            setImpactResults={setImpactResults}
                                                            leadershipAdaptability={leadershipAdaptability}
                                                            cultureCommunity={cultureCommunity}
                                                            setLeadershipAdaptability={setLeadershipAdaptability}
                                                            setCultureCommunity={setCultureCommunity}
                                                            average={average}
                                                            setavg={setavg}
                                                            formValue={values}
                                                            num={num}
                                                            gradeReceiveOptions={gradeReceiveOptions}
                                                            governanceBenchmarkOptions={governanceBenchmarkOptions}
                                                            transperancyBenchmarkOptions={transperancyBenchmarkOptions}
                                                            fromViewPage={true}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className='d-flex flex-wrap w-100'>
                                                        <StarEdit
                                                            financeRating={financeRating}
                                                            setFinanceRating={setFinanceRating}
                                                            accountabilityRating={accountabilityRating}
                                                            setAccountabilityRating={setAccountabilityRating}
                                                            gradeReceiveOptions={gradeReceiveOptions}
                                                            governanceBenchmarkOptions={governanceBenchmarkOptions}
                                                            transperancyBenchmarkOptions={transperancyBenchmarkOptions}
                                                            formValue={values}
                                                        />
                                                    </div>
                                                )
                                                // }
                                                // {
                                                // isradio === 2 && editCharityManage?.charityRatings[0]?.ratingType === 2 &&

                                            }

                                        </div>

                                    </div>
                                    <div className='d-flex flex-wrap form-btn-box' >
                                        {/* <Link to='/home' className='link-btn'>Save</Link> */}
                                        <button type='submit' className='link-btn'>Save</button>
                                        <Link to='/master' className='link-btn cancel'>Cancel</Link>
                                    </div>
                                </form>

                            }}

                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharityEdit

