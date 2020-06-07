// alerts
alert("This is my first java Script web");

alert("Error! Please enter a valid password");

alert("Welcome to JS Land...\n happy coding!")

alert("Welcome to JS Land...")

alert("Happy Coding!")

alert("Hello..! I can run JS through my web broswer's console")

// variables for strings
var username;

var myName = "Yousra Hassan";

var email = "s.yusrahassan.yh@gmail.com"

alert (email)
var book = "A smarter way to learn JavaScript."
alert("I am trying to learn from the Book" + book)

document.write("Yah! I can write HTML content through JavaScript");

var pattern = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(pattern)

//variables for numbers
var age = "I am 15 years old"
alert(age)

var birthyear = "My birth year is"
var numbers = 1999
document.write(birthyear + numbers)

var Vsitorname = "John Doe"
var ProductTitle = "T-Shirt(s)"
var  Quantity = 5
document.write(Vsitorname + "orderd" + Quantity + ProductTitle +  "on XYZ Clothing store")

//varibales names: legal and illegal
var num1 , num2 , num3 

//Q2: 
var 1num , myvar , my name , 2$ , my document
var num1 , myname , $sign , tilte , abc

//maths expression
var num = 5; 
var num2 = 3;
var result = num + num2;
alert(result)
document.write("Sum of" + num + "and" + num2 + "is" + result)

var num = 5; 
var num2 = 3;
var result = num - num2;
alert(result)
document.write("Result of" + num + "and" + num2 + "is" + result)

var num = 5; 
var num2 = 3;
var result = num * num2;
alert(result)
document.write("Product of" + num + "and" + num2 + "is" + result)

var num = 5; 
var num2 = 3;
var result = num % num2;
alert(result)
document.write("Reminder of" + num + "and" + num2 + "is" + result)

//Q3:
var a 
document.write("Value  after  variable declaration is undefined" )
var a = 5;
document.write("<br>Initial Value is : 5")
a++;
document.write("<br>Value after Increment is: 6")
var b = a + 7;
document.write("<br>Value after addition is : 13")
b--;
document.write("<br>Value after Decrement is : 12")
b % 3;
document.write("<br>The remainder is : 0")

var C = 35;
F = (C *9/5) + 32
alert(F)
document.write(C + "C" + "is" + F + "F")
var F = 35;
C = (F - 32) *5/9
alert(C)
document.write(F + "F" + "is" + C + "C")

var Priceofitem1 =  650;
var Priceofitem2 = 100;
var Orderedquantityofitem1 = 3;
var Orderedquantityofitem2 = 7;
var Shippingcharges = 100;
var a = Priceofitem1 * Orderedquantityofitem1;
var b = Priceofitem2 * Orderedquantityofitem2;
var total = a + b + 100;
alert (total)
document.write("Price of item 1 is " + Priceofitem1 )
document.write("<br>Price of item 2 is " + Priceofitem2 )
document.write("<br>Ordered quantity of item 1 is" + Orderedquantityofitem1)
document.write("<br>Ordered quantity of item 2 is" + Orderedquantityofitem2)
document.write("<br>Shipping charges" + Shippingcharges)
document.write("<br>Total cost of your order is" + total)

var a = 804;
var b = 980;
var p = (a/b) * 100
alert (p)
document.write("Total marks:" + b)
document.write("<br>Obtained marks:" + a)
document.write("<br>Percentage" + p)

//chapters 9-11
var city = prompt("Enter city name")
if (city==="karachi"){
    document.write("<br>Welcome to the city of lights")
}
else{
    document.write("<br>Welcome but it is not the karachi")
}


var gender = prompt("Enter your gender")
if(gender==="Male"){
    document.write("<br> Good Morning Sir!")
}
if(gender==="Female"){
    document.write("<br> Good Morning Ma'am!")
}

var fuel = prompt("Enter your remaining fuel in car")
if(fuel<0.25){
    document.write("Please refill the fuel")
}
else{
    document.write("There is no need of fuel")
}

//Q5:
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

    f("car" < "cat"){
        alert("car is smaller than cat");
    }

    var sub1 = parseInt (prompt("Enter the marks of subject 1"))
    var sub1 = parseInt (prompt("Enter the marks of subject 1"))
    var sub1 = parseInt (prompt("Enter the marks of subject 1"))
    var totalmarks= prompt("Enter total marks")
    var obtainedmarks = sub1 + sub2 + sub3
    document.write("Total marks=" + "" + totalmarks);
    document.write("Obtained marks=" + "" + obtainedmarks);
    var per = obtainedmarks/totalmarks * 100
    document.write("<br>Percentage = " + per)
    if (per>=80 && per<=100){
        document.write("<br> Grade"+"A1")
        document.write("<br> Remarks = Excellent")
    }
    if (per>=70 && per<=79){
        document.write("<br> Grade"+"A1")
        document.write("<br> Remarks = Good")
    }
    if (per>=60 && per<=69){
        document.write("<br> Grade"+"B")
        document.write("<br> Remarks = You need to improve")
    }
    if (per<59){
        document.write("<br> Fail")
        document.write("<br> Remarks = Sorry")
    }
    
