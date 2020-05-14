function points(games) {
    let points = 0;
    for(let i = 0; i < games.length; i++) {
      if(Number(games[i][0]) > Number(games[i][2])) {
        points += 3;
      }else if(Number(games[i][0]) === Number(games[i][2])) {
        points += 1;
      }
    }
    return points;
  } 