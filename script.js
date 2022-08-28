function start(){
    const number = document.querySelector("#inputNumber").value
    let option = 0
    let saidaNumeros=[]
    
    if(number % 9 == 0){
        option = option + 9
        //div por 9
    }
    if(number % 5 == 0){
        option = option + 5
        // div por 5
    }

    if(option == 5){
        for (var contador = 1; number >= saidaNumeros.length; contador++) {
            saidaNumeros[contador] = contador
            if(saidaNumeros[contador] % 5 === 0){
                saidaNumeros[contador] = 'luidy'
            }            
        }
    alert(saidaNumeros)
    console.table(saidaNumeros)
    }

    if(option == 9){
        for (var contador = 1; number >= saidaNumeros.length; contador++) {
            saidaNumeros[contador] = contador
            if(saidaNumeros[contador] % 9 === 0){
                saidaNumeros[contador] = 'moura'
            }            
        }
    alert(saidaNumeros)
    console.table(saidaNumeros)
    }

    if(option == 14){
        for (var contador = 1; number >= saidaNumeros.length; contador++) {
            saidaNumeros[contador] = contador
            
            if(saidaNumeros[contador] % 5 === 0 && saidaNumeros[contador] % 9 === 0 ){
                saidaNumeros[contador] = 'luidy moura'
            }

            if(saidaNumeros[contador] % 5 === 0){
                saidaNumeros[contador] = 'luidy'
            }
            if(saidaNumeros[contador] % 9 === 0){
                saidaNumeros[contador] = 'moura'
            }      
            
            

        }
    alert(saidaNumeros)

    console.table(saidaNumeros)
    }
    
    if(option == 0){
        alert('o numero digitado não é divisivel nem por 5 nem por 9')
    }

    
    
}