// function fibo(number){
//     let prev1=0;
//     let prev2 = 1;
//     let sum= prev1+prev2;
//     console.log(prev1);
//     console.log(prev2);
//     for(let i=3; i<=number;i++){
//         sum= prev1+prev2;
//         console.log(sum);
//         prev1=prev2;
//         prev2=sum;
//     }
// }
// fibo(7);

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
//   console.log(reverseString("Hi you"));

function printNumberPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
      let pattern = '';
      for (let j = 1; j <= rows - i; j++) {
        pattern += ' ';
      }
      for (let k = 1; k <= i; k++) {
        pattern += k + ' ';
      }
      console.log(pattern);
    }
  }
  
  printNumberPyramid(4);