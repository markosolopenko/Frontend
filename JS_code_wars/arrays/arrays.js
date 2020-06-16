function daysRepresented(trips){
    var arr=[];
    for (var i=0; i<trips.length; ++i)
      for (var j=trips[i][0]; j<=trips[i][1]; ++j)
        if (arr.indexOf(j)==-1)
          arr.push(j);
    return arr.length;
  }
  
  console.log(daysRepresented([[10, 15], [25, 35]]));