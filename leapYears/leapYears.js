const leapYears = function(year) {
return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)
}


/* longer method
  if ((year % 400 == 0) {
    return true;
  } else if (year % 100 == 0){
    return false;
  } else if (year % 4 == 0) {
      return true;
    } else return false;
}*/

module.exports = leapYears
