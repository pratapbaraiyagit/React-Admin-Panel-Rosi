import patterns from "../../utils/patterns"

export const login = value => {
  let error = {};

  if (!value.email) { error.email = 'Email is required' }
  else if (!/^[^\W_](?:[\w.-]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$/i.test(value.email)) {
    error.email = "Please enter valid email address."
  }
  if (!value.password || !value.password.trim()) { error.password = 'Password is required' }
  else if (value.password && !/^[^\s]+(\s+[^\s]+)*$/.test(value.password)) {
    error.password = "Password must not contain while spaces"
}
  return error;
}

export const registrationstep1 = (value) => {
  let error = {};
  if (!value.UserName || !value.UserName.trim()) {
    error.UserName = "Please enter User Name";
  }
  if (!value.CharityName || !value.CharityName.trim()) {
    error.CharityName = "Please enter Charity Name";
  }
  if (!value.CharityPersonName || !value.CharityPersonName.trim()) {
    error.CharityPersonName = "Please enter Charity Person Name";
  }
  if (!value.CharityEmailAddress || !value.CharityEmailAddress.trim()) {
    error.CharityEmailAddress = "Please enter Charity Email Address";
  } else if (
    value.CharityEmailAddress &&
    !/^[^\W_](?:[\w.-]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$/i.test(
      value.CharityEmailAddress
    )
  ) {
    error.CharityEmailAddress = "Please enter valid Charity Email Address";
  }

  if (!value.Password) {
    error.Password = "Password is required";
  }

  if (!value.ConfirmPassword) {
    error.ConfirmPassword = "Confirm Password is required";
  } else if (value.Password !== value.ConfirmPassword) {
    error.ConfirmPassword = "Confirm Password must match with Password";
  }
  return error;
};

export const registrationstep2 = (value) => {
  let error = {};
  if (!value.CharityDescription || !value.CharityDescription.trim()) {
    error.CharityDescription = "Please enter Charity Description";
  } else if (value.CharityDescription.length > 250) {
    error.CharityDescription = "CharityDescription character shoud be 250";
  }
  if (!value.CharityBriefDescription || !value.CharityBriefDescription.trim()) {
    error.CharityBriefDescription = "Please enter Charity Brief Description";
  } else if (value.CharityBriefDescription.length > 150) {
    error.CharityBriefDescription =
      "CharityBriefDescription character shoud be 150";
  }
  if (!value.PhoneNumber || !value.PhoneNumber.trim()) {
    error.PhoneNumber = "Please enter Phone Number";
  }
  if (!value.CharityAddress || !value.CharityAddress.trim()) {
    error.CharityAddress = "Please enter Charity Address";
  }if (!value.country) {
    error.country = "Please enter country";
  }
  if (!value.state || !value.state) {
    error.state = "Please enter state";
  }
  if (!value.city ) {
    error.city = "Please enter city";
  } 
  
  if (!value.pincode || !value.pincode.trim()) {
    error.pincode = "Please enter Zipcode";
  }
  else if (!patterns.numeric.test(value.pincode)) {
    error.pincode = "Please enter valid Zipcode";
  }else if (value.pincode.length >5){
    error.pincode = " Zipcode shoud be 5 digit ";
  }
  
  
  // else if (value.PhoneNumber > 9){
  //   error.PhoneNumber = "Please enter valid PhoneNumber";
  // }
  return error;
};

export const registrationstep3 = (value) => {

  let error = {}
  if (!value.CharityWebsite || !value.CharityWebsite.trim()) {
    error.CharityWebsite = "Please enter Charity Website";
  }else if (value.CharityWebsite && !/^(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/.test(value.CharityWebsite)) {
    error.CharityWebsite = 'Enter valid Charity Website'
}

  if (!value.CharityFilter || !value.CharityFilter.trim()) {
    error.CharityFilter = "Please enter Charity Filter";
  }
  if (!value.CharityContribution || !value.CharityContribution.trim()) {
    error.CharityContribution = "Please enter Charity Contribution";
  }else if (!patterns.numeric.test(value.CharityContribution)) {
    error.CharityContribution = "Please enter valid Amount";
  }
  if (!value.TaxId || !value.TaxId.trim()) {
    error.TaxId = "Please enter TaxId";
  } else if (value.TaxId.length !== 9) {
    error.TaxId = "Tax ID should be 9 digit code";
  }
  if (!value.CharityFormedyear) {
    error.CharityFormedyear = "Please enter Charity Formed year";
  } else if (value.CharityFormedyear > 4) {
    error.CharityFormedyear = "Please enter Charity Formed year";
  }
  return error;
}
export const registrationstep4 = (value) => {
  let error = {}
  if (value.radio) {
    error.radio = "Please enter radio";
  }

} 