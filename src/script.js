alert('Vamos começar!!!')
alert('Você terá somente 3 chances!')
var chute = parseInt(prompt('Insira um número entre 0 e 20'))

var chances = 3
var numeroSecreto = 3

while( chances > 1 ){
  
  if(chute == numeroSecreto){
    document.write("<h2>" + "ACERTÔ MIZERAVIIIII 🥳🎉" + "</h2>")
    break
  }
  else if(chute < numeroSecreto){
    alert('O número é maior!')
    prompt(`Tente de novo! Você só tem ${chances-1} chances!`)
  }
  else if(chute > numeroSecreto){
    alert('O número é menor!')
    prompt(`Tente de novo! Você só tem ${chances-1} chances!`)
  }
  chances--
}

if(chute != numeroSecreto){
  document.write("<h2>" + "Você perdeu! O número correto era o ${numeroSecreto} 😹" + "</h2>")
}

