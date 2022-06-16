function* generateId(){
    let id=1;
    while(true){
        const adder = yield id;
        if(adder){
            id+= adder;
        } else{
            id++;
        }
    }
   
}

let obj = generateId(); //initializes the generator 
console.log(obj.next()); // returns 1
console.log(obj.next(4));// returns 5
console.log(obj.next()); // returns 6




function* example(){
    yield 1;
    yield 2;
    yield 3;
     //return in here works very similar to yield but it does set the generator to done
}

//loop through generator vals
for(const n of example()){
    console.log(n);
}