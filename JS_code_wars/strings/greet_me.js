var greet = function(name) {
    name = name.replace(name[0], name[0].toUpperCase());
    for(let i = 1; i < name.length; i++) {
      if(name[i] === name[i].toUpperCase()) {
        name = name.replace(name[i], name[i].toLowerCase());
      }
    }
    return `Hello ${name}!`
  };