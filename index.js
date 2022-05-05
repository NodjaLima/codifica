var codificar = document.querySelector('#codificar');
var decodificar = document.querySelector('#decodificar');
var botao = document.querySelector('#botaoCodifica');
var msgEntrada = document.querySelector('#msg');
var msgSaida = document.querySelector('#retorno');
var selecionarCodigo = document.querySelector('#select');
var incremento = document.querySelector('#inc');



// mudar texto do botão de acordo com a seleção radio
codificar.addEventListener("click", function(){
  botao.innerText = "Codificar Mensagem"
})

decodificar.addEventListener('click', function(){
  botao.innerText = "Decodificar Mensagem";
})

//mostra div de incremento quando selecionada a cifra de cesar

selecionarCodigo.addEventListener('change', function(){
  if (selecionarCodigo.value == '0' || selecionarCodigo.value == 'base64') {
    document.querySelector('.increm').style.display = 'none';
  } else {
    document.querySelector('.increm').style.display = 'flex';
  }
})

//codificando Base64 e validando seleções


botao.addEventListener('click', (function (noRecarg) {
  noRecarg.preventDefault();
  criptografar(msgEntrada.value) 
}))

function criptografar(texto) {
  if (selecionarCodigo.value == 'base64' && botao.innerText == 'Codificar Mensagem') {
    var resultCripto64 = btoa(texto);
    msgSaida.value = resultCripto64;
  } else if (selecionarCodigo.value == 'cifraDeCesar' && botao.innerText == 'Codificar Mensagem') {
    var resultCesar = cifraDeCesar(msgEntrada.value, +incremento.value);
    msgSaida.value = resultCesar;
  } else if (selecionarCodigo.value == 'base64' && botao.innerText == 'Decodificar Mensagem') {
    var resultDecripto64 = atob(texto) 
    msgSaida.value = resultDecripto64;
  } else if (selecionarCodigo.value == 'cifraDeCesar' && botao.innerText == 'Decodificar Mensagem') {
    var resultDecriptoCesar = cesarDecifrado(msgEntrada.value, +incremento.value);
    msgSaida.value = resultDecriptoCesar;
  } else {
    alert('Verifique se marcou todas as opções do formulário');
  }
  
}


// codificando em cifra de cesar

function cifraDeCesar(texto, increment) {
var entrada = texto.split('');
var numeroCesar = [];
var retornoCesar = [];
for (i=0; i < entrada.length ; i++) {
  if(entrada[i].charCodeAt() > 64 && entrada[i].charCodeAt() < 91) {
    var aplicaCifra = (entrada[i].charCodeAt() - 65 + increment) % 26;
    numeroCesar.push(aplicaCifra + 65);
  } else if (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122) {
    aplicaCifra = (entrada[i].charCodeAt() - 97 + increment) % 26;
    numeroCesar.push(aplicaCifra + 97);
  } else {
    numeroCesar.push(entrada[i].charCodeAt())
    }
  }

  for (var j = 0; j < numeroCesar.length ; j++) {
          retornoCesar.push(String.fromCharCode(numeroCesar[j]))
      }
      return retornoCesar.join('');
    
}




// // // decodificando em cifra de césar

function cesarDecifrado(texto, increment) {
  var guardaMensagem = texto.split('')
  var msgCriptografada = []
  var cesarNumero = []

  for (let i = 0; i < guardaMensagem.length; i++) {
      if (guardaMensagem[i].charCodeAt() >= 65 && guardaMensagem[i].charCodeAt() <= 90) {
          let testando = ((guardaMensagem[i].charCodeAt()) - 65 - increment) % 26
          cesarNumero.push((testando < 0 ? testando + 26 : testando) + 65)
      } else if (guardaMensagem[i].charCodeAt() >= 97 && guardaMensagem[i].charCodeAt() <= 122) {
          let testando = ((guardaMensagem[i].charCodeAt()) - 97 - increment) % 26
          cesarNumero.push((testando < 0 ? testando + 26 : testando) + 97)
      } else {
          cesarNumero.push(guardaMensagem[i].charCodeAt())
      }
  }
  for (var j = 0; cesarNumero.length > j; j++) {
      msgCriptografada.push(String.fromCharCode(cesarNumero[j]))
  }
  return msgCriptografada.join('')

}



// function cifraDeCesar(increment) {
//   var string = msgEntrada.value;
//   var string1 = string.toUpperCase();
//   var msgCifrada = '';
//   var resto = 26 - increment;

//   for(i=0; i < string1.length; i++){
//     var convertAsc = string1[i].charCodeAt();
//     var convert1 = String.fromCharCode(convertAsc + increment);
//     var convert2 = String.fromCharCode(convertAsc - resto);
//     if (convertAsc >= 65 && convertAsc < 65 + resto) {
//       msgCifrada += convert1;
//     } else if (convertAsc >= 65 + resto && convertAsc <= 90) {
//       msgCifrada += convert2;
//     } else {
//       msgCifrada += string1[i];
//     }
    
//     }
//     return msgCifrada;
     
// }