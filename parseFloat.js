function parsFloat(str) {
    let output = "";
    for (let j = 0; j < str.length; j++) {
      if (str[j] >= 0 || str[j] < 0 || str[j]==".") {
        output += str[j];
      } else {
        break;
      }
    }
    if(output.length===0){
        return "is not a number";
    }
    else {
        return  +output;
    }
  }