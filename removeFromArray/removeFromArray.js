const removeFromArray = function(array, elem) {
  for (var i=0; i<array.length; i++){
    if (array.includes(3)) {
      if (array[i] === 3) {
        array.splice(i,1);
        i--;
        return array;
      }
    }
  }



}

module.exports = removeFromArray
