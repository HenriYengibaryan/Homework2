//Declare variable. Initialize it with the value, which shows temperature in degrees Celsius.
// Print its equivalent in degrees Fahrenheit. To convert temperatures in degrees Celsius to
// Fahrenheit use the following formula: °C * 1.8 +32 = °F .
let x = 0
const c = 32
alert( x*1.8+ c)
//2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
let x = 52
let lastnumber = x%10
let firstnumber =(x - x%10)/10
    

    if( firstnumber%lastnumber===0 || lastnumber%firstnumber===0){
        console.log(1)
        
    }else{
        console.log(2)
    }
//3. Given any number between 1 and 12. Print the name of the respective month.
let x= 0
switch (x){
    case(1):
    console.log('Hunvar')
                break;
    case(2):
            console.log('Petrvar')
                break;
    case(3):
    console.log('Mart')
        break;
    case(4):
    console.log('April')
break;
    case(5):
        console.log('Mayis')
        break;
        case(6):
        console.log('Hunis')
        break;
        case(7):
        console.log('Hulis')
  break;      
    case(8):
        console.log('Ogostos')
        break;
    case(9):
        console.log('September')
        break;
    case(10):
        console.log('Hoktember')
       break;
    case(11):
        console.log('Noyember')
        break;
    case(12):
        console.log('Dectember')
        break;
        default: ('notdefaul')
}
//4. Given three numbers. Find the maximum one.
let x = 54
let y = 542
let q = 5444
let z = -155
Math.max( x,y,q,z)

//5Given a number. Print its absolute value. (without Math.abc)

let x = -9
console.log(((x**2) ** (1/2)))



// 6 Declare three variables. Two of them are the bounds of a range. Print “In bounds”, if the
//third number is in the range, otherwise print “Out of bounds”.
const x = 92
const y = -12
let z = 458
if( z <= x && z >= y){
    console.log('Tiruytum e')
}else{
    console.log('Chi patkamum')
}
















 
