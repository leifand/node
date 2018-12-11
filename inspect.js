function inspect(obj) {
    for (let p in obj) {
        console.log(p,obj[p]);
    }
    console.log();
}

x = {};
x.a = 5;
x.b = "abc";
x.c = [];
x.d = ()=>{return 0;}
inspect(x);

y = {a:5,b:"abc",c:[],d:()=>{return 0;}};
inspect(y);

console.log(x == y);
console.log(x === y);
console.log();

inspect(console);