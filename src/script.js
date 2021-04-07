alert('Vamos começar!!!')
alert('Você terá somente 3 chances!')

var min = 1
var max = 20
var chances = 3
var numeroSecreto = Math.floor(Math.random() * 20 + 1);

while (chances > 0) {
    var chute = parseInt(prompt(`Insira um número entre ${min} e ${max}. 
  Lembrando que seu saldo de chances é de:  ${chances}`))

    if (chute < min || chute > max) {
        alert('Número inválido')
        document.write("<h2>" + "Por favor, recarregue a página e insira um valor válido" + "</h2>")
        break
    }

    else if (chute >= min || chute <= max) {
        if (chute === numeroSecreto) {
            document.write("<h2>" + "ACERTÔ MIZERAVIIIII 🥳🎉" + "</h2>")
            break
        }
        else if (chute < numeroSecreto) {
            alert('O número é maior!')
            chances--
        }
        else if (chute > numeroSecreto) {
            alert('O número é menor!')
            prompt(`Tente de novo! Você só tem ${chances - 1} chances!`)
            chances--
        }
    }
}

if ((chute != numeroSecreto) && !(chute < min || chute > max)) {
    document.write("<h2>" + "Você perdeu! O número correto era o " + numeroSecreto.toFixed(0) + " 😹" + "</h2>")
}