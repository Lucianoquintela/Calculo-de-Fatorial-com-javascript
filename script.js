function botao_ver_resultado() {
    const numero_digitado = document.getElementById("fatorial").value;

const fatorial = parseInt(numero_digitado)

calculo = 1;
for (var calculo2= 1, _ = fatorial + 1; calculo2 < _; calculo2 += 1) {
  calculo *= calculo2;
}

console.log(`O fatorial de ${numero_digitado} e: ${calculo}!`);

const exibir = calculo

document.querySelector(".exibir_resultado").innerHTML = exibir
}


