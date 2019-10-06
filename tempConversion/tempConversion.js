const ftoc = function(temp) {
  let c = (temp-32) * (5/9);
  let cRounded = parseFloat(c.toFixed(1));
  return cRounded;
}

const ctof = function(temp) {
  let f = (temp * (9/5) + 32);
  let fRounded = parseFloat(f.toFixed(1));
  return fRounded;
}

module.exports = {
  ftoc,
  ctof
}
