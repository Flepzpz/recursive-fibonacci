function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}

var n = Number(prompt("Insira a posição da sequência de fibonacci desejada:"))
console.log("=============================\nValor na posição "+n+" da sequência de fibonacci: "+fibonacci(n),
"\n=============================")