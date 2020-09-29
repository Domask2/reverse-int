module.exports = function reverse (n) {
  if(n<0) n *= -1; 
  let rever =  n.toString().split('');
  let result = [];
  for(let i=rever.length-1; i>=0; i--) {
    if(rever[i])
     result.push(rever[i])
 }
  return result.join('');
}
