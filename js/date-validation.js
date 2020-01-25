function validStardDate(element) {
    var UserDate = element.value;
    var ToDate = new Date();
    ToDate.setHours(0,0,0,0);
    if (new Date(UserDate).getTime() < ToDate.getTime()) {
          alert("The Date must be Bigger or Equal to today Date");
          element.value ="";
          return false;
     }
    return true;
}

function validEndDate(element) {
    var startDate = document.getElementById("startDate");
    if (!startDate.value) {
        alert("Select Start Date First");
        element.value ="";
        return false;
    }
    var UserDate = element.value;
    var ToDate = startDate.value;
    if (new Date(UserDate).getTime() < new Date(ToDate).getTime()) {
          alert("The Date must be Bigger or Equal to Start Date");
          element.value ="";
          return false;
     }
    return true;
}
