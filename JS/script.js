let textUser = document.getElementById('textUser')
let User = document.getElementById('text')
      
function enviar(){
  if(textUser.value === ''){
    alert('campo vazio')
  }
  else if (User.value === ''){
    alert('digite seu nome e sobrenome primeiro')
  }else{
    alert('enviado')
  }
}
      
  function limpar(){
    textUser.value = ''
  }