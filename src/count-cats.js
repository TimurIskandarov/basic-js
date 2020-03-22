module.exports = function countCats(matrix) {
  let count = 0;
  for(let arrCat of matrix) {
    for(let ears of arrCat) {
      switch(ears){
        case("^^"): { count++; continue; }
        default: continue;
      }
    }
  }
  return count;
};