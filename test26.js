//let sum = 0;

//for (let i = 1; i <= 100; i++) {
   // sum += i;
//}

//console.log(sum);
//홀수만 출력
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
               console.log(i);

    }
}

let num =0;
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log("짝");
    } else {
        console.log(i);
    }
}

    
let n = 10;
let isPrime = true;
if (n === 1) {
    isPrime = false
}else{
    for(let i=2; i<n; i++){
        if(n % i== 0){
            isPrime=false
            
        }
    }
}
console.log(isPrime);
