//if-else anidado

let a = 10,
b = 5,
c = 7

if(a>b){
    if(a>c){
        console.log(`A (${a}) es el mayor`)
    }else {
        console.log(`C (${c}) es el mayor`)
    }
} else if(b>c){
    console.log(`B (${b}) es el mayor`)
}else {
    console.log(`C (${c}) es el mayor`)
}