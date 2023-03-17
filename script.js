// declaration
var name='arjun';
let x=9;
console.log(x);
{
    let x=10;
    console.log(x);
}
 let y=20;
const pi=3.14
var s=x+y;
var d=x/y;
var m=x-y;
var a=x*y;
var g=10;

console.log("sum:",s);
console.log("divide:",d);
console.log("diffrence:",m);
console.log("product:",a);
console.log(g++);
console.log(g--);
console.log(++g);
console.log(--g);
document.write('sum:'+ s);
document.write(' divide:'+ d);
document.write(' diff:'+ m);
document.write(` the product is ${a}`);
let w="10";
if(w==10){
    console.log('good');
}
else{
    console.log("bad");
}
let f=["apple","banana","grapes","orange"];
console.log(f);
f.push('mango');
console.log(f);
f[2]='pine';
console.log(f);
console.log(f.length);
console.log(f.pop());
console.log(f[1]);
let car={
    model:"bs12",
    color:"dark blue",
    price:900000
};
let car2={
    model:"bs12",
    color:"dark blue",
    price:900000
};
let car3={
    model:"bs12",
    color:"dark blue",
    price:900000
};
let c=[{
    model:"bs12",
    color:"dark blue",
    price:900000
},
{
    model:"bs14",
    color:"red",
    price:1500000
},
{
    model:"bs",
    color:"dark blue",
    price:900000
}]
console.log(c[2].color);
let fr=["apple","banana","grapes","orange"];
//for(let i=0;i<fr.length;i++){
    // console.log(fr[i]);
// }
let i=0;
do{
    console.log(fr[i]);
    i=i+1;
}while(i<fr.length)

const add=(a,b)=>{
    console.log(a+b);
}
add(4,4);
const multiply=(a,b)=>{
    console.log(a*b);
}
multiply(4,4);
