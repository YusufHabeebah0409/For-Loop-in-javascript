for (let i=1;i<=100; i++) {
//    console.log(i);
if(i%2==0){
//   console.log(`${i} Even Number`);
  show.innerHTML += `<h1 style="color:purple;">${i} Even Number</h1>`
}else{
    // console.log(`${i} Odd Number`);
    show.innerHTML += `<h3 style="color:plum;">${i} Odd Number</h3>`
}
    
}