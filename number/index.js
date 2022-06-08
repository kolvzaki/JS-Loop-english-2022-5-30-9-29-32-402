const resolve = () => {
  for(let i = 0; i <=20 ;i++){
    if(i==0) continue;
    if(i%2===1){
      console.log(`${i} is odd number`);
    }
    else{
      console.log(`${i} is even number`);
    }
  }
}