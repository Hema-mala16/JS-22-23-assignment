//use strict mode//

let jehHeight = 100
let toddHeight=5
let jehWeight=56
let toddWeight=2
let TRUE=true
let FALSE=false

 function bmiCalci(height,mass){
     BMI=BMI= mass/(height*height)
     console.log(BMI)
 }
 jeh=bmiCalci(jehHeight,jehWeight)
 todd=bmiCalci(toddHeight,toddWeight)
 if(jeh>=todd){
     console.log(`Jeffs BMI higher than off Todd ${TRUE}`)
 }
 else{
     console.log(`Jeffs BMI not higher than off Todd ${FALSE}`)
 }
 let boolen
var bool

jeffBMI > toddBMI ? bool= true : bool = false

console.log('is Jeff’s BMI higher than Todd’s true? ' +bool)
console.log('---------------Assignment 2 ------------------')
console.log('average---------------------------------')

function average(p1,p2,p3){
    avg=(p1+p2+p3)/3
    return avg;
}
Heath = average(89,120,103)
Zane = average(116,94,123)
Maraih=average(97,134,105)

if(Heath==Zane){
    console.log(`There is Tie. Average Score is ${Heath}`)
 elseif(Heath>Zane)
 {
    console.log(`Heath won the match . Average Score is ${Heath}`)
 }

}else{
    console.log(`Zane won the match . Average score is ${Zane}`)
}

console.log('Entering third team')

if(Heath>Zane && Heath > Maraih){
    console.log(`Heath won the match ${Heath}`)
}
else if(Zane > Maraih) 
{
    console.log(`Zane won the match ${Zane}`)
}else
{
    console.log(`Marai won the match ${Maraih}`)
}