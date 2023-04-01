// ---------------------------_____Start TYPESCRIPT at 24/03/2023_____---------------------------------
// ----------------25/03/2023 at 9:00 am 


// // -----------------------------01-------The any Type ----------------------------start

// let numbers:number = 59;///it's number type variable
// let strings: string ='musaddik';///it's string type variable
// let boolean: boolean=true;///it's boolean type variable
// let test;///it's any type variable
// //example01....
// test =1;
// test='musaddik';
// test=true;
// // .....as a but best practice you never use "any" type variable
// //example02

// // function render(document){ //problems
// //     console.log(document)
// // }

// function render(document:any){  //solution
//     console.log(document)
// }
// // ---------------------------01---------The any Type ----------------------------end

// ---------------------------------------___End__&__Start______---------------------------------------

// // ------------------------02--------------------------Arrays----------------------------start

// // let numbers=[12,123,24,5,'ga']
// // let numbers: number=[12,123,24,5,'ga'] ///can't use string

// // let numbers=[]
// // numbers[0]=1;
// // numbers[1]='string';
// // numbers[2]=true;

// // let numbers: number[]=[] //now u can use only numbers
// // numbers[0]=1;
// // numbers[1]='string';// not that
// // numbers[2]=true;// not that

// let numbers: number[]=[]
// //numbers.forEach(n=>n.) ///this is the benefit


// // ------------------------02--------------------------Arrays----------------------------end

// ---------------------------------------___End__&__Start______---------------------------------------

// // -----------------------03---------------------------Tuples------------------------------------start


// let user: [number,string,number,boolean]=[21,'as',23,true];  ///fixed line Array
// // user.push(1)

// // -----------------------03---------------------------Tuples------------------------------------end

// ---------------------------------------___End__&__Start______---------------------------------------

// // -----------------------04---------------------------Enums------------------------------------start

// // const small=1;
// // const medium=2;
// // const large=3;

// //PascalCase

// // enum Size{Small,Medium,Large}  //by default first member value is 0 and other member value is 1,2,.....

// // enum Size{Small=2,Medium=45,Large=0}  //u can easily set this value
// // enum Size{Small='s',Medium='M',Large='l'}  //u can easily set this string value

// // --------
// // enum Size{Small=1,Medium,Large}
// // let mySize:Size=Size.Medium;
// // console.log(mySize)

// const enum Size{Small=1,Medium,Large}  //more optimize code  
// let mySize:Size=Size.Medium;
// console.log(mySize)


////////////////   


// const enum FruitPrices{
//     applePrice,
//     mangoPrice
// }
// const fruitOne =FruitPrices.applePrice
// const fruitTwo = FruitPrices.mangoPrice
// console.log(fruitOne)
// console.log(fruitTwo)

// const enum Day{
//     mon,tru,wed,thu,fir,sat,sun='sun'
// }
// let days :Day;
// days=Day.mon
// days=Day.thu
// days=Day.sun
// console.log(days)
/////////
// enum PostState{
//     Draft,
//     Scheduled,
//     Published
// }
// const x: PostState=PostState.Draft
// console.log(x)
// // -----------------------04---------------------------Enums------------------------------------end

// ---------------------------------------___End__&__Start______---------------------------------------

// // -----------------------05---------------------------Functions------------------------------------start

// // function calculateTax(income: number){ ///return any type of variable
// //     return `musaddik${2+1}`;
// // }

// // as a best practice always defined return type variable
// // function calculateTax(income: number)/*:number*/{ ///return only number type  variable
// //     if(income<50_000)
    
// //     return income*1.2;
// //     // else undefined
// // }

// // function calculateTax(income: number):number{ ///return only number type  variable
// //     // let x; /// find unused variable using type script setting
// //     if(income<50_000)
    
// //     return income*1.2;
// //     // else
// //    return income*1.3;
// // }

// // function calculateTax(income: number,taxYears: number):number{ ///return only number type  variable
// //     if(taxYears<2022)
    
// //     return income*1.2;
// //    return income*1.3;
// // }
// // // calculateTax(200,2020,32) //error
// // // calculateTax(200) //error
// // //if you celled this function ..you have to supply same argument (nothing more nothing less)
// // calculateTax(2_000,2020)


// // // ---01
// // function calculateTax(income: number,taxYears?: number):number{ /// "?" it's mean optional
// //     // if(taxYears<2022)///error
// //     if((taxYears||2022)<2022)/// error fixed using old js system
    
// //     return income*1.2;
// //    return income*1.3;
// // }
// // calculateTax(200) 

// // ---02
// function calculateTax(income: number,taxYears=2022):number{ /// error fixed by using this system 
//     // if(taxYears<2022)///error
//     if(taxYears<2022)
    
//     return income*1.2;
//    return income*1.3;
// }
// calculateTax(200) 
// // -----------------------05---------------------------Functions------------------------------------end

// ---------------------------------------___End__&__Start______---------------------------------------

// // -----------------------06---------------------------Objects------------------------------------start

// // let employee={ id: 1}
// // employee.name='mosh';

// // let employee:{
// //     id:number,
// //     // name:string //error
// //     name?:string  //fixed error
// // }={ id: 1}
// // employee.name='mosh';


// // let employee:{
// //     id:number,
// //     // name:string  
// //   readonly  name:string  
// // }={ id: 1,name:'musaddik'}
// // // employee.name='tazwer'

// // it's not better way

// let employee:{
//   readonly    id:number, 
//   name:string , 
//   retire:(date:Date)=>void
// }={ 
//     id: 1,
//     name:'musaddik',
//     retire:(date: Date)=>{
//         console.log(date)
//     },
// }

// // -----------------------06---------------------------Objects------------------------------------end

// ---------------------------------------___End__&__Start_(another_section)___---------------------------------------

// // -----------------------07---------------------------Type Aliases------------------------------------start

// // it's not better way

// // let employee:{
// //     readonly    id:number, 
// //     name:string , 
// //     retire:(date:Date)=>void
// // }={ 
// //     id: 1,
// //     name:'musaddik',
// //     retire:(date: Date)=>{
// //         console.log(date)
// //     },
// // }

// // better way is thats
// type Employee={
//         readonly    id:number, 
//         name:string , 
//         retire:(date:Date)=>void

// }
// let employee: Employee={ 
//     id: 1,
//     name:'musaddik',
//     retire:(date: Date)=>{
//         console.log(date)
//     },
// }

// why you i used type aliases?

//without using type aliases 
// const logDetails=(uid: string | number , item : string )=>{
//     console.log(`${item} uid is ${uid}`)
// }
// console.log(logDetails('2', 'apple'))

///using type aliases

// type StringOrNumber=string|number;
// const logDetails=(uid: StringOrNumber , item : string )=>{
//     console.log(`${item} uid is ${uid}`)
// }
// console.log(logDetails('2', 'apple'))


///using type aliases (object)

// type objWithName ={item:string , uid:string|number}

// const logDetails=(ask:objWithName )=>{
//         console.log(`${ask.item} uid is ${ask.uid}`)
//     }

//     const test={
//         item:'aplle',
//         uid:2
//         // uid:false
//     }
//     console.log(logDetails(test))
// // -----------------------07---------------------------Type Aliases------------------------------------end

// ---------------------------------------___End__&__Start_(another_section)___---------------------------------------

// // -----------------------08---------------------------Union Type ------------------------------------start
 
////////////////////////////////--------------------------------------
// type MyName ={name : string }
// type MyAge ={age : number }

// type NameOrAge=MyName|MyAge
// type NameAndAge = MyName & MyAge

// const a:NameOrAge={name:'musaddik'}
// const b:NameOrAge={age:23}
// // const c:NameOrAge={name:'tazwer',age:17}

// const c:NameAndAge={name:'tazwer',age:17}
// console.log(`name:${a.name} and Age:${b.age}`)
// console.log(`name:${c.name} and Age:${c.age}`)


// let weight:number | string 
// function kgToLbs(weight: number | string):number{
//     // Narrowing
//     if(typeof weight === 'number'){
//         return weight*2.2;
//     }
//     else
//     return parseInt(weight)*2.2;

// }
// kgToLbs(10);
// kgToLbs('10kg')
// console.log(kgToLbs('10kg'))

// // -----------------------08---------------------------Union Type ------------------------------------end


// ----------------------------------___End__&__Start_(another_section)___---------------------------------

// // -----------------------09------------------------Intersection Type -------------------------------start
// // let weight:number & string


// type Dreaggable={
//     drag: () => void
// };

// type Resizeable={
//     resize: () => void
// };

// type UIWidget = Dreaggable & Resizeable;

// let text: UIWidget ={
//     drag:() =>{},
//     resize:() =>{}
// }
// console.log(text)
///////////////////////////////////////////////////////////////////////////
// type Admin ={
//     name:string ;
//     roles:string[]
// }
// type Employee={
//     name:string;
//     startDate:Date;
// }
//  type superEmployee = Admin & Employee

//  let emp:superEmployee={
//     name:'musaddik',
//     roles:['get up at 4am '],
//     startDate:new Date(),

//  }
//  console.log(emp)


//////////other system


// interface Admin {
//     name:string ;
//     roles:string[]
// }
// interface Employee{
//     name:string;
//     startDate:Date;
// }
// interface  superEmployee extends Admin , Employee {}

//  let emp:superEmployee={
//     name:'musaddik',
//     roles:['get up at 4am '],
//     startDate:new Date(),

//  }
//  console.log(emp)


// type combinable=number | number;
// type numeric =number | boolean;
// type universal =combinable & numeric;

// // let test : universal = 'd'; /////can't use thats 
// let test : universal = 6;

// // -----------------------09------------------------Intersection Type -------------------------------end


// ----------------------------------___End__&__Start_(another_section)___---------------------------------

// // -----------------------10------------------------Literal Type -------------------------------start
// limit the value
//Literal (exact,specific)

// let quantity:number;
// let fixedMel:30 | 1_00= 100;

// type Quantity = 50|100;
// let fixedMel: Quantity = 100;


// type fixedName='musaddik' | 'tazwer';

// let Name: fixedName = 'musaddik'


// // -----------------------10------------------------Literal Type -------------------------------end


 // ----------------------------------___End__&__Start_(another_section)___---------------------------------

// -----------------------11------------------------Nullable Type --------------------- start

// function greet(name : string | undefined | null ){
//     if (name)
//     console.log(name.toLocaleUpperCase)
//      else
//        console.log('Hola!')
// }

// let a= greet(null)
// console.log(a)
// -----------------------11------------------------Nullable Type ---------------------end

// ----------------------------------___End__&__Start_(another_section)___---------------------------------

// -----------------------12------------------------Optional Chaining ---------------------start


type Customer={
    // birthday:Date
    birthday?:Date
};
function getCostomer(id: number ):Customer| null |undefined {
    return id===0 ?null : {birthday: new Date()}
}
 let customer =getCostomer(0);
//  console.log(customer.birthday)
// if (customer!== null && customer !==undefined)
//    console.log(customer.birthday)
// -------------------------------------------------------//optional property access operator 
//    console.log(customer?.birthday.getFullYear)
console.log(customer?.birthday?.getFullYear())


// ________________________________________optional element access operater
// if (customer!== null && customer !==undefined)
//    customer[0]
// customer?.[0]


// ____________________________ optional call
// let log:any =(message: string )=> console.log(message)
let log:any= null;
// log('a') ///error
// log?.('a')  ///fixed error


// -----------------------12------------------------Optional Chaining ---------------------end 







// --------------------------------------freeCodeCamp---------------------------------------start
// 29-03-2023

// let Name:string ='musaddik';
// let UserId: number =43;
// UserId=3.4;
// console.log(Name,UserId)

// function addTwoNum(num1 :number,num2:number ):number{
//     return num1+num2;
// }
// function singUpUser(name:string,email:string,Numbers: number){
//     let array  =[name,email,Numbers]
//     return array;
// }
// let sum=addTwoNum(12,43);
// console.log(sum,singUpUser('musaddik','musaddikh13@gmail.com',12))
// const id=[12,34,65,87,45];
// id.map((data)=>console.log(data))

// function consoleError(errmsg: string): void{
//     console.log(errmsg)
// }

// function HandleError(errmsg: string): never{
//     throw new Error(errmsg)
// }

// const User ={
//     name:'musaddik' ,
//     address:'rajbari',
//     phone:1757346415,
//     active:true
// }  
// function createUser({name: string , active: boolean}){}
// createUser({name:'mtx',active:false})\
// function Crea
// --------------------------------------freeCodeCamp---------------------------------------end