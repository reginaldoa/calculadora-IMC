function enviar(){
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const res = document.querySelector("#res");
    const imc = peso/(altura*altura);

    if(peso ==0 || altura == 0){
        window.alert("ERRO, é necessário digitar peso e altura!")
    }  else if(imc < 18.5){
        res.innerHTML=`Você está abaixo do peso, É necessário fazer uma dieta hipercalórica. Seu IMC é ${imc.toFixed(2)}`
    } else if (imc >= 18.5 && imc <= 24.9){
        res.innerHTML=`Parabéns, seu IMC está normal, no valor de ${imc.toFixed(2)}`
    }else if (imc >= 25.00 && imc <= 29.9){
        res.innerHTML=`Você está com sobrepeso, seu IMC é de ${imc.toFixed(2)}`
    }else if (imc >= 30.00 && imc <= 34.9){
        res.innerHTML=`Você está com obesidade grau 1, precisamos ajustar a dieta! Seu IMC é ${imc.toFixed(2)}`
    }else if (imc >= 35.00 && imc <= 39.9){
        res.innerHTML=`Você está com obesidade grau 2, é necessário fazer uma dieta hipocalórica! Seu IMC é ${imc.toFixed(2)}`
    }else if(imc >40){
        res.innerHTML=`Você está com obesidade grau 3, precisamos consultar um nutricionista!. Seu IMC é ${imc.toFixed(2)}`
    } 
}