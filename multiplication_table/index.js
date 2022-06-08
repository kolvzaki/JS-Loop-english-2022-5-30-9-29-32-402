const res = () => {
  let str = ""
  for(let i=1;i<=9;i++){
    for(let j=1;j<=i;j++){
      str = str + `${i}*${j}=${i*j} `
      if(i===j){
        str += '\n'
      }
    }
  }
  console.log(str);
  return str
}