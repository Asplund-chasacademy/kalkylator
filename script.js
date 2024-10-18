// Ber användaren skriva in två tal samt vilken operation som ska användas
let firstNumber = parseFloat(prompt("Ange det första talet:"));
let operation = prompt("Vill du använda +, -, *, /, % eller **?");
let secondNumber = parseFloat(prompt("Ange det andra talet:"));

let result;

// if-sats för att kolla om vi har rätt inmatning
if (isNaN(firstNumber) || isNaN (secondNumber)) {

    alert("Felaktig inmatning, skriv in ett nummer");
    console.log("Felaktig inmatning");

} else {
    // if-sats för varje operation 

    // Addition
    if (operation === "+") { 

        result = (firstNumber + secondNumber);
        alert(`Summan är: ${result}`);
        console.log(result);
    
    // Subraktion    
    } else if  ( operation === "-") {

        result = (firstNumber - secondNumber);
        alert(`Differensen är: ${result}`);
        console.log(result);

    // Multiplikation
    } else if ( operation === "*") {

        result = (firstNumber * secondNumber);
        alert(`Produkten är: ${result}`);
        console.log(result);

    // Division    
    } else if ( operation === "/") {

        //Säkerställer att vi inte delar med 0
        if (secondNumber !== 0) {

            result = (firstNumber / secondNumber);
            alert(`Kvoten är: ${result}`);
            console.log(result);  

        } else {

            //Felmeddelande om secondNumber är 0
            alert("Kan inte dela med 0");
            console.log("Kan inte dela med 0");

        } 

    // Modulus
    } else if (operation === "%") {

        result = (firstNumber % secondNumber);
        alert(`Resten blir: ${result}`);
        console.log(result);
    
    // Exponentiering    
    }else if (operation === "**") {

        result = (firstNumber ** secondNumber);
        alert(`Exponenten är: ${result}`);
        console.log(result);
    
    // Felmeddelande om användaren skriver in annat än operatörer
    } else { 

        alert("Ogiltig operation, använd +, -, *, /, % eller **");
        console.log("Ogiltig operation");
    }
}          