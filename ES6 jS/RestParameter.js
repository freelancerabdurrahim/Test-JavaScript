function Calculation(...numbers){
    let sum=0;
    for(let i of numbers){
        sum=sum+i;
    }
    console.log(sum);
}
Calculation(2,3,5);