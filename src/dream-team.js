module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  let name = '';
  for(let member of members) {
    if(typeof member == "string") {
      member = member.trim();
      name += member[0].toUpperCase();
    }
  }
  return name.split('').sort().join('');
};