enviar = () =>{
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const res = document.querySelector("#res");
    const imc = peso/(altura*altura);
    const dicas = document.querySelector('#dicas')

    if(peso ==0 || altura === 0){
        window.alert("ERRO, é necessário digitar peso e altura!")
    }  else if(imc < 18.5){
        res.innerHTML=`Você está abaixo do peso, É necessário fazer uma dieta hipercalórica. Seu IMC é ${imc.toFixed(2)}<br>`
    } else if (imc >= 18.5 && imc <= 24.9){
        res.innerHTML=`Parabéns, seu IMC está normal, no valor de ${imc.toFixed(2)} <br>`
    }else if (imc >= 25.00 && imc <= 29.9){
        res.innerHTML=`Você está com sobrepeso, seu IMC é de ${imc.toFixed(2)}`
    }else if (imc >= 30.00 && imc <= 34.9){
        res.innerHTML=`Você está com obesidade grau 1, precisamos ajustar a dieta! Seu IMC é ${imc.toFixed(2)} <br>`
    }else if (imc >= 35.00 && imc <= 39.9){
        res.innerHTML=`Você está com obesidade grau 2, é necessário fazer uma dieta hipocalórica! Seu IMC é ${imc.toFixed(2)} <br>`
    }else if(imc >40){
        res.innerHTML=`Você está com obesidade grau 3, precisamos consultar um nutricionista!. Seu IMC é ${imc.toFixed(2)} <br>`
    } 

    dicas.innerHTML= `Dicas básicas de alimentação
                     <ul>Consumir</ul>
                     <li>Tente ingerir pelo menos 2 litros de água por dia.</li>
                     <li>2 gramas de proteínas por kilo corporal, diariamente</li>
                     <li>1 grama de gorduras por kilo corporal, diariamente</li>
                     <li>4 gramas de carboidratos por kilo corporal, diariamente</li>
                     
                     <p>Lembre-se sempre, antes de iniciar qualquer dieta, independente do objetivo, é sempre importante consultar um nutricionista para verificar as melhores opções.</p>`
}
