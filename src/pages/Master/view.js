import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { renderField, renderSelectField } from "../../components/forms";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tookit from "../../components/svg/tookit";
import ImgUpload from "../../components/common/img-upload-home";
import { toAbsoluteUrl } from "../../utils";
import Encompass from "../../pages/Registration/tabs/encompass";
import "./charity.scss";
import Star from "../Registration/tabs/star";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Charitydetail, Charityverifictaion } from "../../actions/charity";
import Dmodel from "../../components/common/delete";

const MasterView = () => {
  const charitydetail = useSelector(
    (state) => state.ChairtyReducer.chairtyDetail
  );

  const metaData = useSelector((state) => state.metaReducer)
  const [startDate, setStartDate] = useState();
  const [options, setOptions] = useState([]);
  const [category, setCategory] = useState([]);
  const [ismodel, setmodel] = useState(false);
  // let [charityFilter, setCharityFilter] = useState()
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const onSubmit = (value) => { };
  const onhandleaccept = () => {
    const data = {
      charityId: id,
      adminVerification: "Approve",
      rejectReason: "",
    };
    console.log(data)
    dispatch(Charityverifictaion(data))
      .then(() => navigate("/master/charity_management"))
      
    };
  const onhandlereject = () => {
    setmodel(true);
  };

  const option = [
    { value: "Help Girl Child", label: "Help Girl Child" },
    { value: "Women safety", label: "Women safety" },
    { value: "F = Failing", label: "F = Failing" },
  ];

  
  const num = 50;
  const chairtyrating = {
    cultureCommunity:
    charitydetail?.charityRatings?.[0]?.encompass?.cultureCommunity,
    financeAccountability:
    charitydetail?.charityRatings?.[0]?.encompass?.financeAccountability,
    impactResults:
    charitydetail?.charityRatings?.[0]?.encompass?.impactResults,
    leadershipAdaptability:
    charitydetail?.charityRatings?.[0]?.encompass?.leadershipAdaptability,
    governanceBenchmark:
      charitydetail?.charityRatings?.[0]?.governanceBenchmark,
      gradeReceive: charitydetail?.charityRatings?.[0]?.gradeReceive,
      guideStar: charitydetail?.charityRatings?.[0]?.guideStar,
    transperancyBenchmark:
      charitydetail?.charityRatings?.[0]?.transperancyBenchmark,
    accountability:
      charitydetail?.charityRatings?.[0]?.starRating?.accountability,
    finance:
    charitydetail?.charityRatings?.[0]?.starRating?.finance,
    charityId: charitydetail?.charityRatings?.[0]?.charityId,
  };
  useEffect(() => {
    setOptions(
      charitydetail?.causesDetails?.map((item) => ({
        value: item._id,
        label: item.causename,
      }))
      );
      setCategory(
        charitydetail?.charityCategories?.map((item) => ({
          value: item._id,
          label: item.category_name,
        }))
        );
        setStartDate(charitydetail?.charityDetails?.formedYear);
        // setradio(charitydetail?.charityRatings?.[0]?.ratingType)
      }, [charitydetail]);
  useEffect(() => {
    dispatch(Charitydetail(id));
  }, [id]);
let charityFilter = ''
  switch (charitydetail?.charityDetails?.charityFilter) {
    case 1:
      charityFilter ='International'
      break;
    case 2:
      charityFilter='National'
      break;
      case 3:
        charityFilter='Local'
        break;
        
        case 4:
          charityFilter='Other'
          break;
          default:
            break;
          }
          
          console.log('charityFilter: ', charityFilter);
          return (
            <>
      <div>
        <div className="top-box">
          <Breadcrumb />
          <div className="d-flex justify-content-between align-content-center">
            <h2>Charity View </h2>
            <Link to="/master" className="link-btn back">Back</Link>
          </div>
        </div>
        <div className="section-inner">
          <div className="form-area">
            <Form
              onSubmit={onSubmit}
              initialValues={{
                username: charitydetail?.userName,
                charityname: charitydetail?.charityName,
                charitypersonname: charitydetail?.charityPersonName,
                charityemail: charitydetail?.charityEmailAddress,
                chairtydescription: charitydetail?.charityDetails?.description,
                chairtybriefdescription:
                  charitydetail?.charityDetails?.brief_description,
                phonenumber: charitydetail?.charityDetails?.phoneno,
                charitytagline: charitydetail?.charityDetails?.tagline,
                charityaddress: charitydetail?.charityDetails?.address?.floor,
                city: charitydetail?.charityDetails?.address?.city,
                state: charitydetail?.charityDetails?.address?.state,
                zipcode: charitydetail?.charityDetails?.address?.zipcode,
                country: charitydetail?.charityDetails?.address?.country,
                charitywebsite: charitydetail?.charityDetails?.website,
                taxid: charitydetail?.charityDetails?.taxId,
                Charityfilter: charityFilter,
                Contributionamountrequired:
                  charitydetail?.charityDetails?.charityContribution,
                charityCategory: { value: charitydetail?.charityCategories?.[0]?._id, label: charitydetail?.charityCategories?.[0]?.category_name },
                cause: options,
                charityCategory: category,
                Charityformedyear: charitydetail?.charityDetails?.formedYear
              }}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="input-list d-flex flex-wrap">
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> User name
                      </label>
                      <Field
                        name="username"
                        readOnly={true}
                        type="text"
                        placeholder="user name"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Charity name
                      </label>
                      <Field
                        name="charityname"
                        readOnly={true}
                        type="text"
                        placeholder="charity name"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Charity person name
                      </label>
                      <Field
                        name="charitypersonname"
                        readOnly={true}
                        type="text"
                        placeholder="charity person name"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Charity email address
                      </label>
                      <Field
                        name="charityemail"
                        readOnly={true}
                        type="text"
                        placeholder="charity email address"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Charity brief description{" "}
                      </label>
                      <Field
                        name="chairtybriefdescription"
                        readOnly={true}
                        type="text"
                        placeholder="Charity brief description"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Charity description{" "}
                      </label>
                      <Field
                        name="chairtydescription"
                        type="text"
                        readOnly={true}
                        placeholder="Charity description"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                         Phone number{" "}
                      </label>
                      <Field
                        name="phonenumber"
                        readOnly={true}
                        type="text"
                        placeholder="phone number"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Charity tag line{" "}
                      </label>
                      <Field
                        name="charitytagline"
                        readOnly={true}
                        type="text"
                        placeholder="charity tag line"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Chairty logo{" "}
                      </label>
                      <ImgUpload
                        moduleName='charityLogo'
                        multiple={false}
                        oldLogo={metaData?.mediaURL + 'charityLogo/' + charitydetail?.charityDetails?.logo}
                      />
                    </div>
                    <div className="col-12 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> charity address{" "}
                      </label>
                      <Field
                        name="charityaddress"
                        type="text"
                        readOnly={true}
                        placeholder="charity address "
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> City{" "}
                      </label>
                      <Field
                        name="city"
                        readOnly={true}
                        type="text"
                        placeholder="city"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> State{" "}
                      </label>
                      <Field
                        name="state"
                        readOnly={true}
                        type="text"
                        placeholder="state"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Pin code{" "}
                      </label>
                      <Field
                        name="zipcode"
                        readOnly={true}
                        type="text"
                        placeholder="pin code"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Country{" "}
                      </label>
                      <Field
                        name="country"
                        readOnly={true}
                        type="text"
                        placeholder="country"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Charity website{" "}
                      </label>
                      <Field
                        name="charitywebsite"
                        readOnly={true}
                        type="text"
                        placeholder="charity website"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Charity formed year{" "}
                      </label>
                      <Field
                        name="Charityformedyear"
                        readOnly={true}
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                      {/* <DatePicker
                        selected={startDate}
                        // onChange={(date) => setStartDate(date)}
                        className="input-box"
                      /> */}
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Charity category{" "}
                      </label>
                      <Field
                        //defaultValue={[colourOptions[2], colourOptions[3]]}
                        isMulti={false}
                        name="charityCategory"
                        options={category}
                        component={renderSelectField}
                        className="basic-multi-select"
                        readOnly={true}
                        classNamePrefix="select"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Tax id{" "}
                      </label>
                      <Field
                        name="taxid"
                        readOnly={true}
                        type="text"
                        placeholder="tax id"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Charity Filter{" "}
                      </label>
                      <Field
                        name="Charityfilter"
                        readOnly={true}
                        type="text"
                        placeholder="Charity Filter"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Cause Related
                      </label>
                      <Field
                        //defaultValue={[colourOptions[2], colourOptions[3]]}
                        isMulti={true}
                        name="cause"
                        options={options}
                        component={renderSelectField}
                        readOnly={true}

                        className="basic-multi-select"
                      // classNamePrefix="select"
                      />
                    </div>
                    <div className="col-md-6 col-div">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Chairty Contribution{" "}
                      </label>
                      <Field
                        name="Contributionamountrequired"
                        readOnly={true}
                        type="text"
                        placeholder="chairty Contribution"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </div>
                    {/* <div className="col-md-6 col-div rating-inner-box">
                      <label className="label-text">
                        {" "}
                        <span>*</span> Rating{" "}
                      </label>
                      <div className="d-flex align-items-center inner-div">
                        <div>
                          <label
                            className="check-label"
                            onClick={() => setradio(1)}
                          >
                            Encompass Rating
                            <input type="radio" name="action" checked />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div>
                          <label
                            className="check-label"
                            onClick={() => setradio(2)}
                          >
                            Star Rating
                            <input type="radio" name="action" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </div> */}

                    <div className="col-12 col-div rating-inner-box">
                      {/* <label className='label-text'> <span>*</span> Rating </label>
                                                <div className='d-flex align-items-center inner-div'>
                                                    <div>
                                                        <label className="check-label">Encompass Rating 
                                                            <input type="radio" name='action' />
                                                            <span className="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                    <div>
                                                        <label className="check-label">Star Rating 
                                                            <input type="radio" name='action' />
                                                            <span className="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                </div> */}
                      {charitydetail?.charityRatings?.[0]?.ratingType === 1 ? (
                        <div className="d-flex flex-wrap w-100">
                          <h4>Encompass Rating:</h4>
                          <Encompass
                            fromViewPage={true}
                            ratingDetails={chairtyrating}
                          />
                        </div>
                      ) : (<div className="d-flex flex-wrap w-100">
                        <h4>Star Rating:</h4>
                        <Star ratingDetails={chairtyrating} />
                      </div>)}
                      {/* {isradio === 2 && (
                        <div className="d-flex flex-wrap w-100">
                          <Star ratingDetails={chairtyrating} />
                        </div>
                      )} */}
                    </div>
                    {/* <div className='col-md-6 col-div' >
                                                <label className='label-text'> <span>*</span> Action </label>
                                                <div className='d-flex align-items-center inner-div'>
                                                    <div>
                                                        <label className="check-label approve">Approve
                                                            <input type="radio" name='action' />
                                                            <span className="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                    <div>
                                                        <label className="check-label reject">Reject
                                                            <input type="radio" name='action' />
                                                            <span className="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                </div>
                                            </div> */}
                  </div>
                  {charitydetail?.adminVerification === 'Reject' ? "" :
                    <div className="d-flex flex-wrap form-btn-box">
                      <button
                        className="link-btn"
                        type="button"
                        onClick={onhandleaccept}
                      >
                        Approve
                      </button>
                      <button
                        className="link-btn cancel"
                        type="button"
                        onClick={onhandlereject}
                      >
                        Reject
                      </button>
                      {/* <button className="link-btn cancel">Cancel</button> */}
                    </div>}
                </form>
              )}
            </Form>
          </div>
        </div>
      </div>
      <Dmodel name="Add to Rejection Reason charity" id={id} setmodel={setmodel} ismodel={ismodel} />
    </>
  );
};

export default MasterView;
