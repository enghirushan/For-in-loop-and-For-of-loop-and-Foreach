const number =[15,5,12,55];

let sum=0;

number.forEach(num=>{
  sum+=num;

  console.log(sum);


})



const emp = {
    name:"nimal",
    age:"20",
    category:"11"
}

for(key1 in emp){
    console.log((key1)+" = " +emp[key1]);

}


 const arr=["haritha","janidu","nadun","ravindu"];

 for(const key2 of arr){
    console.log(key2);
 }