function calc() {

    let inputOne = document.getElementById("InputValueOne").value; 
    let inputTwo = document.getElementById("inputValueTwo").value; 
    let inputOperator = document.getElementById("operator").value; 

    if( inputOne == "" || inputTwo == ""){
        document.getElementById("resultado").innerHTML = "Os campos precisam ser preenchidos!"
        return;
    }

    let valueOne = parseInt(inputOne)
    let valueTwo = parseInt(inputTwo)

    if(inputOperator === "+"){
        let plus = valueOne + valueTwo
        document.getElementById("resultado").innerHTML = plus
    }

    else if(inputOperator === "-"){
        let subtract = valueOne - valueTwo
        document.getElementById("resultado").innerHTML = subtract
    }
    
    else if(inputOperator === "*"){
        let multiply = valueOne * valueTwo
        document.getElementById("resultado").innerHTML = multiply
    }
    
    else if(inputOperator === "/" ){
        if(valueOne === 0 || valueTwo === 0){
            document.getElementById("resultado").innerHTML = "Não é possível dividir por zero!"
            return
        }
        let division = valueOne / valueTwo
        document.getElementById("resultado").innerHTML = division
    }
}