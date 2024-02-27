let user = {
    name: "Cosimo",
    age: 30,
  };

  let newUser = {}
  for(let key in user){
        newUser[key] = user[key]
  }
 newUser.name = 'Pedro'

  console.log(user);
  console.log(newUser);