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

//prevenindo comportamento default do botão

botao.addEventListener('click', (function (noRecarg) {
  noRecarg.preventDefault();
  criptografar(msgEntrada.value) 
}))

//codificando Base64 e validando seleções

function cBase64 (texto) {
  var resultCripto64 = btoa(texto);
    msgSaida.value = resultCripto64;
}

function dBase64 (texto) {
  var resultDecripto64 = atob(texto) 
    msgSaida.value = resultDecripto64;
}

function criptografar() {
  
  if (selecionarCodigo.value == 'base64' && botao.innerText == 'Codificar Mensagem') {
    cBase64(msgEntrada.value);
    
  } else if (selecionarCodigo.value == 'cifraDeCesar' && botao.innerText == 'Codificar Mensagem') {

    var resultCesar = cifraDeCesar(msgEntrada.value, +incremento.value);
    msgSaida.value = resultCesar;

  } else if (selecionarCodigo.value == 'base64' && botao.innerText == 'Decodificar Mensagem') {
    dBase64(msgEntrada.value)

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
  var h = entrada[i].charCodeAt()
  if(h > 64 && h < 91) {
    var aplicaCifra = (h - 65 + increment) % 26;
    numeroCesar.push(aplicaCifra + 65);
  } else if (h >= 97 && h <= 122) {
    aplicaCifra = (h - 97 + increment) % 26;
    numeroCesar.push(aplicaCifra + 97);
  } else {
    numeroCesar.push(h)
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
    var h = guardaMensagem[i].charCodeAt();
      if ( h >= 65 && h <= 90) {
          let testando = ((h) - 65 - increment) % 26
          cesarNumero.push((testando < 0 ? testando + 26 : testando) + 65)
      } else if (h >= 97 && h <= 122) {
          let testando = ((h) - 97 - increment) % 26
          cesarNumero.push((testando < 0 ? testando + 26 : testando) + 97)
      } else {
          cesarNumero.push(h)
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