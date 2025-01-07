// let n = +(prompt("Enter any number:"))
//....................................prime
// let n = 13
// if (n === 1) {
//     console.log('not prime');
// }
// // let check=true
// for (i = 2; i < n; i++) {
//     if (n % i === 0) {
//         console.log('not prime');
//         break
//     }
//     else  if(i===n-1){
//         console.log('prime');
//         break
//     }
// }

// if (check===false){
// console.log('not prime');
// }
// else {
//     console.log('prime');
// }

//..........................................simple interest
// let p = 1000
// let r = 10
// let t = 2
// let si = (p*r*t)/100
// console.log(si);

//..........................................average of three numbers
// let a = 10
// let b = 20
// let c = 30
// let avg = (a+b+c)/3
// console.log(avg);

//..........................................celsius to fahrenheit

// let c = 30
// let f = (c*9/5)+32
// console.log(f);

//..........................................check num is positive or negative
// let n = 10
// if (n>0){
//     console.log('positive');
// }
// else{
//     console.log('negative');
// }

//..........................................check leap year or not
// let y = 2000
// if (y%4===0 && y%100!==0 || y%400===0){
//     console.log('leap year');
// }
// else{
//     console.log('not leap year');

//..........................................menu driven simple calculator
// let a = 10
// let b = 20
// let op = prompt('Enter any operator')
// if (op === '+') {
//     console.log(a + b);
// }
// else if (op === '-') {
//     console.log(a - b);
// }
// else if (op === '*') {
//     console.log(a * b);
// }
// else if (op === '/') {
//     console.log(a / b);
// }

//..........................................sum all digits of a number
// let n = 1234
// let sum = 0
// let r
// while (n > 0) {
//     r = n % 10
//     sum = sum + r
//     n = parseInt(n / 10)
// }
// console.log(sum);
// let n = 1234
// let sum=0
// let a=[12,1]
// let arr=n.toString().split('')
// console.log(n.toString());
// console.log(n.toString().split(''));
// console.log(typeof arr, +(arr[0])+Number(arr[1])+Number(arr[2]));
// for (i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     sum=sum+Number(arr[i])
// }
// console.log(sum);
// ..............................................angstrom number
// let angstrom = 142
// let checkAngstrom = angstrom.toString().split('')
// let sum=0
// console.log(checkAngstrom);
// for (i = 0; i < checkAngstrom.length; i++){
//     // console.log(Number(checkAngstrom[i]) ** 3);
//     sum=sum+(Number(checkAngstrom[i]) ** 3)
// }
// console.log(sum);

// if (sum === angstrom) {
//     console.log('angstrom number');
// }
// else {
//     console.log('not angstrom number');
// }
// ...............................................reverse entered num
// let a = '123'
// let rev = a.split('').reverse().join('')
// console.log(rev);

// ...............................................check palindrome
// let a = '123'
// let rev = a.split('').reverse().join('')
// console.log(rev);
// if (a === rev) {
//     console.log('palindrome');
// }
// else {
//     console.log('not palindrome');
// }
// ...................................................recursion explain
// let arr = [1, 2, 3, 4, 5]
// function fa(n) {
//     if (n > 5) {
//         return 'greater then 5'
//     }
//     else if (n === 5) {
//         return 5
//     }
//     else if (n === 2) {     
//         return 2
//     }
// console.log(n);
    // return fa(n + 5)    
// }
// console.log(fa(1))
// console.log(arr[0]);
// let sum =0
// for (i = 0; i < arr.length; i++)
// {
//     sum += arr[i]
//     }
// console.log(sum);

// ...................................................factorial
// function f(n) {
//     if (n === 1 || n === 0)
//     {
//         return 1
//     }
//     return n*f(n-1)
// }
// console.log(f(3));

// let a = 9

// console.log(a++, ++a);
// ............................................practice for recursion
// let arr = [1, 2, 3, 4, 5];
// function add(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
//     return arr[0] + add(arr.slice(1));
// }
// console.log(add(arr)); 

// function f(n) {
//     if (n === 0) {
//         return 0
//     }
//     console.log(f(n-1));
//     // let result = f(n - 1)
//     // console.log(result);
//     return f(n - 1)
// }
// console.log(f(5));



// ...............................................LCM
// function f(a, b ,lcm=a>b?a:b) {

//     if (lcm % a === 0 &&lcm % b === 0) {
//         return lcm
//     }
//         return f(a,b,lcm+1)
    
// }
// console.log(f(16,6));



// .............................................GCD
// function f(a, b, lcm = a > b ? a : b) {
    
//     if (lcm % a === 0 && lcm % b === 0) {
//         return a*b/lcm
//     }
//     return f(a, b, lcm + 1)
    
// }
// console.log(f(3,9));
// console.log(num);

// ..................................table

// function f(n,i=1) {
//     if (i == 10) {
//         return 
//     }
//     console.log('important \xaa chech');
//      return f(n,i+1)
    
// }
// console.log(f(3));

// function checking(str) {
//     // let str = 'abcdef'
//     console.log(str.slice(0, 3));
// }
// checking('abcdef')
// let str = 'hi how are u'
// let space = str.split(' ')

// str.indexOf(' ')
// // let x = indexOf('h')
// console.log(space[0].toUpperCase());


//......................................string 'my name is kashif my is as is'
// let str = 'my name is kashif my is as is';
// let str1 = str.split(' ').join(''); 
// // console.log(str1); 
// let arr = str1.split(' ')
// // console.log(arr.length);
// let arr1 = str.split(' ')

// console.log(arr1[2]);

// ....................................................recursion practice(table)

// function f(n,i) {
//     if (n <=10)
//     {
//         f(n + 1,i)
//         console.log(n,"*",i,"=",n*i);
//     }
// }
// f(1,5)



// let j = arr.join()
// let sum=0
// for (i = 0; i < arr.length; i++){
//     if (arr[i] != '')
//     {
//         sum+=.length
//     }
    
//     console.log(arr.length);
    
// }
// console.log(sum);
// console.log(indexOf('h'));
// ............................................fibonacci
// function fibo(n) {
//     if(n == 0) {
//         return 0
//     }
//     if (n == 1) {
//         return 1
//     }
//     let result = fibo(n - 1) + fibo(n - 2)
//     console.log(result);
//     return result
// }
// console.log(fibo(6));




// function sum(start_index, arr) {
//     let result = 0
//     if (arr.length == start_index) return 0;
//     result = arr[start_index] + sum(start_index + 1, arr);
//     console.log(result)
//     return result
// }
// let arr = [1,1,1,1]
// let start_index = 0
// console.log(sum(start_index, arr))


// function sumArr(arr) {
//     let sum = 0
//     if (arr.length == 0)
//     {
//         return 0
//     }
//     console.log(arr)
//     let result=arr
//     return arr[0]+sumArr(arr.slice(1))
// }
// console.log(sumArr([1,2,3]))


//.....................................................recursion practice (power)

// function f(base, power) {
    // if (power == 1) {
        // return base
    // }
//     if (power == 0) {
//         return 1
//     }

//     let result = base ** power
//     console.log("this",result)
//     return f(base,power-1)
// }
// console.log(f(2,3));

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,recursion (descending order)

// function f(n) {
//     if (n == 0) {
//         return 'compiled'
//     }
//     console.log(n-1);
//     return f(n-1)
// }
// console.log(f(5));

//.........................................nestedSum([1, [2, 3], 4, [5, [6]]]) should return 21.
let arr = [1, [2, 3], 4, [5, [6]]]
let str = arr.join(',')
let sum = 0
let arr1 = str.split(',')
arr1=arr1.map(Number)
function f(arr1) {
    if (arr1.length == 0) {    
        return 0
    }
    sum=arr1[0]+f(arr1.slice(1))
    // console.log(sum);
    return sum
}
// console.log(arr.join(','));
console.log(f(arr1))
// console.log(arr1)

