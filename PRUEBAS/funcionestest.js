function getName(name) {
    return name;
  }
  
  function getAge(age) {
    switch (true) {
      case age > 18:
        return "You can drive";
      default:
        return "Sorry  you can't drive";
    }
  }
  
  function checkDriver(paramGetName, paramGetAge, paramName, paramAge) {
    return paramGetName(paramName) + paramGetAge(paramAge);
  }
  
  console.log(checkDriver(getName, getAge, "Moises ", 30));