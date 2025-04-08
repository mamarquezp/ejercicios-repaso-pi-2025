//else if
require('colours')
let nota = 83

if (nota>=90){
    console.log("A".blue)
} else if (nota>=80){
    console.log("B".green)
}else if (nota>=70){
    console.log("C".yellow)
}else if (nota>=60){
    console.log("D".magenta)
}else {
    console.log("F".red)
}