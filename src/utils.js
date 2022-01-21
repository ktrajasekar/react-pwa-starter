const returnfooter = (name = "raj") => {
  return "Rajasekar React Learning" + name;
};

const testexports = (params) => {
  return params + "Rocks";
};

module.exports = {
  returnfooter,
  testexports,
};
