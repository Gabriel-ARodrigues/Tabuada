function gerar(){
    let n1 = document.getElementById ('numero1');
    let res = document.getElementById ('resultado');
    res.innerHTML = ""
    if (n1.value.length <= 0){
        alert('[ERRO] Faltam Dados')
    }else{
        let valor1 = Number(n1.value);
        for(mult = 0; mult <=10; mult++){
            let calc = valor1 * mult
            res.innerHTML+=`<option>${valor1}X${mult}=${calc}</option>`
        }
    }
}