function UniqueString(value) {
  let newStr = [...new Set(value.split(""))].toString().replace(/,/g, "");
  if (newStr.length === value.length) {
    return true;
  } else {
    return false;
  }
}

// UniqueString("crack");
module.exports = UniqueString;
