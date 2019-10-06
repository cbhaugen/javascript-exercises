const sumAll = function (start, end) {
  if (start>end){
    [start,end] = [end,start];
  }
  if ((start<0) || (end<0)) return "ERROR";
  if (typeof start !== "number" || typeof end !== "number") return "ERROR";

  let singleVal = 0;

  for(let i=start; i < end+1; i++){
    singleVal += i;
  }
  return singleVal;
}


module.exports = sumAll

/*
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop*/
