export const hompageCms= (value) => {
    let error = {};
    if (!value.bannerdescription || !value.bannerdescription.trim()) {
      error.bannerdescription = "Please enter banner description";
    } if (!value.bannertitle || !value.bannertitle.trim()) {
      error.bannertitle = "Please enter banner title";
    } else if (value.bannertitle.length > 29) {  
      error.bannertitle =
        "banner title character shoud be 29";
    }
    if (!value.abouttitle || !value.abouttitle.trim()){
        error.abouttitle = "Please enter about title";
      } else if (value.abouttitle.length > 42) {  
        error.abouttitle =
          "about title character shoud be 42";
      }
      if (!value.aboutheading || !value.aboutheading.trim()){
        error.aboutheading = "Please enter about heading";
      } else if (value.aboutheading.length > 110) {  
        error.aboutheading =
          "about heading character shoud be 110";
      }
      if (!value.aboutdescription || !value.aboutdescription.trim()) {
        error.aboutdescription = "Please enter about description";
      }
    
    return error;
  };
