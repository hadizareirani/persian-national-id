function ValidNationalId(nationalId = '') {
  let code = nationalId;
  const sameNumber =
    code === "0000000000" ||
    code === "1111111111" ||
    code === "2222222222" ||
    code === "3333333333" ||
    code === "4444444444" ||
    code === "5555555555" ||
    code === "6666666666" ||
    code === "7777777777" ||
    code === "8888888888" ||
    code === "9999999999";

  const valueLength = code ? code.length : 0;
  if (valueLength === 0) {
    return false;
  }

  if (valueLength < 10 || parseInt(code, 10) === 0 || sameNumber) {
    return false;
  }

  code = ("0000" + code).substr(valueLength + 4 - 10);
  if (parseInt(code.substr(3, 6), 10) === 0) {
    return false;
  }
  const checkCode = parseInt(code.substr(9, 1), 10);
  let result = 0;
  for (let i = 0; i < 9; i++) {
    result += parseInt(code.substr(i, 1), 10) * (10 - i);
  }
  result = result % 11;
  if (
    (result < 2 && checkCode === result) ||
    (result >= 2 && checkCode === 11 - result)
  ) {
    return true;
  } else {
    return false;
  }
}

function GenerateNationalId() {
  let nationalId = "";
  let sumOfNumbers = 0;
  for (var i = 10; i >= 2; i--) {
    randomNumber = Math.floor(Math.random() * 10);
    sumOfNumbers = sumOfNumbers + randomNumber * i;
    nationalId += randomNumber;
  }
  let leftOver = sumOfNumbers % 11;

  nationalId =
    leftOver < 2 ? nationalId + leftOver : nationalId + (11 - leftOver);
  return nationalId;
}

module.exports = {
  ValidNationalId,
  GenerateNationalId,
};
