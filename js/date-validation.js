function TDate(element) {
    var UserDate = element.value;
    var ToDate = new Date();
    if (new Date(UserDate).getTime() <= ToDate.getTime()) {
          alert("The Date must be Bigger or Equal to today Date");
          element.value = "";
          return false;
     }
    return true;
}
