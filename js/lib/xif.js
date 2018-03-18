export default condition => statement1 => statement2 => {
  if (condition) {
    return statement1;
  } else {
    return statement2;
  }
};
