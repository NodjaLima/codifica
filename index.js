var codificar = document.querySelector('#codificar');
var decodificar = document.querySelector('#decodificar');
var botao = document.querySelector('#botaoCodifica');

codificar.addEventListener("click", function(){
  botao.innerText = "Codificar Mensagem"
})

decodificar.addEventListener('click', function(){
  botao.innerText = "Decodificar Mensagem";
})


var selecionarCodigo = document.querySelector('#select')
selecionarCodigo.addEventListener('change', function(){
  if (selecionarCodigo.value == '0' || selecionarCodigo.value == 'base64') {
    document.querySelector('.increm').style.display = 'none';
  } else {
    document.querySelector('.increm').style.display = 'flex';
  }
})


//codificando em Base64



// ​selecionarCodigo​.​addEventListener​(​'change'​,​ ​function​(​)​ ​{ 
//   ​    ​if​ ​(​selecionarCodigo​.​value​ ​===​ ​"1"​)​ ​{ 
//   ​        ​document​.​getElementById​(​"someDiv"​)​.​style​.​display​ ​=​ ​'block' 
//   ​    ​}​ ​else​ ​{ 
//   ​        ​document​.​getElementById​(​"someDiv"​)​.​style​.​display​ ​=​ ​'none' 
   
//   ​    ​}

// var opcao = 'Cifra de César';
// var select = document.querySelector('#select');
// var increm = document.querySelector('.increm')
// for(i=0; i > select.option.legth; i++) {
//   if (select.option[i].text === opcao) {
//     increm.style.backgroundColor = 'red';
//     break;
//   }
// }


  // var incremento = document.querySelector('#cesar');
  // var select = document.querySelector('#select');
  // var i = 2

  // if (select[i]) {
  //   incremento.style.display = 'flex';
  // }


// var mostraincremento = document.querySelector('#cesar')
// mostraincremento.addEventListener('click select', function(){
//   document.querySelector('.increm').style.display = 'flex';
// })

// função para aparecer campo incremento quando selecionada a cifra de cesar, porém ainda não funciona.

// var radiocesar = document.querySelector('#cesar')
// var incremento = document.querySelector('.increm')
// radiocesar.addEventListener('select', function(){
//   incremento.style.display = "flex";
// })


//função de codificar em base64 que tbm nao funciona essa merda
// 


// let myDiv_1 = document.getElementById('div_1');
//       let myDiv_2 = document.getElementById('div_2');
      
//       let str = "Git";
//       let encodedStr = btoa(str);
//       myDiv_1.innerHTML = encodedStr;


//O btoa() pega uma string e a codifica em Base64, e atob() pega uma string codificada e a decodifica.

// botao.innerText = 'teste'

// codificar.addEventListener("click", function () {
//   // if (radios[0].checked == true) {
//   botao.innerText = 'Codificar Mensagem'
// // } else {
// //   botao.innerText = 'Decodificar Mensagem'
// // }
// })

// var radios = document.querySelectorAll("input[name='bola']");
// var botao = document.querySelectorById('botaoCodifica');

// var selecao = select () => {
//   var selecionado = document.querySelector('input[name="bola"]:checked').value;
// botao.textContent = `${selecionado}`;
// } 

// botao.innerHTML = 'Agir';

// radios.addEventListener(checked, function () {
//       if (radios[0].checked == true) {
//       botao.innerHTML('Codificar Mensagem')
//     } else {
//       botao.innerHTML('Decodificar Mensagem')
//     }
  
// })

// function incremento () {
//   var select = document.querySelector('#select');
//   var value = select.options[select.selectIndex].value;
//   if (value == base64) {
//     var incremento = document.querySelector('.increm');
//     incremento.style.display = 'flex';
//   }
// }

// incremento()