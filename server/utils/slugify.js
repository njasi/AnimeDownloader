let alpha_numeric = " abcdefghijklmnopqrstuvwxyz0123456789"
module.exports = (to_change)=>{
  let slug = "";
  for(let i = 0; i < to_change.length; i++){
    if(alpha_numeric.indexOf() !== -1){
      slug +=to_change[i];
    }
  }
  return slug.replace(" ","_")
}
