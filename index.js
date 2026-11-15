///////////////////////////////////////Question 1
let str="123";
str=Number(str)+7
console.log(str)
///////////////////////////////////////Question 2
let num=0;
if(!num){
    console.log("Invalid")
}
///////////////////////////////////////Question 3
for(let i=0;i<=10;i++){
    if(i%2==0){
        continue;
    }
    else{
        console.log(i)
    }
}
///////////////////////////////////////Question 4
let arr=[1,2,3,4,5];
let evenArr=arr.filter((v)=>{return v%2==0})
console.log(evenArr)
///////////////////////////////////////Question 5
let arr1=[1,2,3]
let arr2=[4,5,6]
let mergedArr=[...arr1,...arr2]
console.log(mergedArr)
///////////////////////////////////////Question 6
let dayNum=2;
switch (dayNum) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Wrong number")
        break;
}
///////////////////////////////////////Question 7
let strArr=["a", "ab", "abc"];
let len=strArr.map((v)=>{return v.length})
console.log(len)
///////////////////////////////////////Question 8
function divisible(a) {
    if (a%3==0 && a%5==0) {
        return "Divisible by both";
    }
    return "Not divisible by both";
}
console.log(divisible(15))
///////////////////////////////////////Question 9
let squuare=(num)=>{return num*num}
console.log(squuare(5))
///////////////////////////////////////Question 10
let obj={
    name: 'John', 
    age: 25
}
let destruct=(obj)=>{
    let {name,age}=obj
    return `${name} is ${age} years old`
}
console.log(destruct(obj))
///////////////////////////////////////Question 11
function sum(...rest){
    let s=0;
    for(let i=0;i<rest.length;i++){
        s+=rest[i]
    }
    return s;
}
console.log(sum(1,2,3,4,5))
///////////////////////////////////////Question 12
let fun1=()=>{
        return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Success");
        },3000)
        
    });
}
fun1().then((a)=>{console.log(a)})
///////////////////////////////////////Question 13
let largest=(arr)=>{
    let a=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>a)
        {
            a=arr[i];
        }
    }
    return a
}
console.log(largest([1, 3, 7, 2, 4]))
/////////////////////////////////////Question 14
let obj2={name: "John", age: 30}
let fun2=(obj)=>{return Object.keys(obj); }
console.log(fun2(obj2))
///////////////////////////////////////Question 15
let splitStr="The quick brown fox" 
let  splits=(splitStr)=>{
    let arr= splitStr.split(" ")
    return arr
}
console.log(splits(splitStr));
///////////////////////////////////////////////////////////Part2//////////////////////////////////////////////////

//1. 
//for each:used to execute a function on each element of array
//         and It does not wait for async callbacks to complete.
//for of:use to itrative over element of array and It supports async/await inside the loop

//2.
//Hoisting:when variable and function declarations are moved to the top of it's scope before code execution
//         example:console.log(x)
//                 var x = 5
//TDZ:is the time when let and const variable cannot be used before initialization
//    example:console.log(y); 
//            let y = 10;
//         Or
//            hello();
//            let hello = function() {
//            console.log("hello");}

//3.
//== :compare two variables based on their values only
//=== :compare two variables based on both their values and data types

//4.
//try catch:try block contains code that may cause an error and catch block handles the error
//          used in async operations to handle errors when a Promise is rejected while using async await

//5.
//conversion: the programmer manually convert  value from data type to another
//            example:Number("10")
//coercion:JavaScript automatically convert  value from
//         data type to another 
//         example:console.log("10" - 5)