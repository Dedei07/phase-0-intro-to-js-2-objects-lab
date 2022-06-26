// Write your solution in this file!
const employee = {}
function updateEmployeeWithKeyAndValue
(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(Dedei, key, value) {
  Dedei[key] = value;

  return Dedei;
}

function deleteFromEmployeeByKey(Dedei, key) {
  const NEW_OBJ =  Object.assign({}, Dedei);
  delete NEW_OBJ[key];
  return NEW_OBJ;
}

function destructivelyDeleteFromEmployeeByKey(Dedei, key) {
  Object.assign({}, Dedei);
  delete Dedei[key];
  return Dedei;
  }