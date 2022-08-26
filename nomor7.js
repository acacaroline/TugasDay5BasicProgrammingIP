function bilGanjil(a, b){
    let ganjil = " ";
    for(let i=a; i<b; i++){
       if(i%2 !==0){
            ganjil += i + " ";   
        }
    }
    console.log(ganjil);
}
bilGanjil(1,100);