import metodos from "./metodos.js";

//////// area variaveis/////////////
;
let nome = document.getElementById("nome");
let sobrenome = document.getElementById("sobrenome");
let cpf = document.getElementById("cpf");
let petName = document.querySelectorAll("#petname");
let dropdown = document.querySelectorAll("#dropdown");
let checkbox = document.getElementById("checkbox");
let nomeEmpresa = document.getElementById("nomeEmpresa");
let endereco = document.getElementById("endereco");
let cnpj = document.getElementById("cnpj");
let data = document.getElementById("data");
//////////////////////////////////////////////

/////////////// ouvidores de eventos para inicar os metodos///////////////////////
document
  .getElementById("btn-pet")
  .addEventListener("click", proximaEtapa, false);
////////////////////////////////////////////////////////////////////////////////////

////////////////////////////// para ir para proxima etapa
function proximaEtapa() {
  let nomeEtapa = metodos.verificaNome(nome);
  let sobrenomeEtapa = metodos.verificaNome(sobrenome);
  let cpfEtapa = metodos.verificaNome(cpf);
  let nomeEm = metodos.verificaNome(nomeEmpresa);
  let enderecoEmpresa = metodos.verificaNome(endereco);
  let cnjpEmpresa = metodos.verificaNome(cnpj);
  let dataEmpresa = metodos.verificaNome(data);

  if (nomeEtapa == true) {
    if (sobrenomeEtapa == true) {
      if (cpfEtapa == true) {
        if (nomeEm == true) {
          if (enderecoEmpresa == true) {
            if (cnjpEmpresa == true) {
              if (dataEmpresa == true) {
                if (checkbox.checked == true) {
                   alert(`
                   ENVIADO!
                   Nome Completo: ${nome.value} ${sobrenome.value}
                   CPF: ${cpf.value}
                   Pets: Nenhum
                   Empresa:${nomeEmpresa.value}
                   Endereco:${cnpj.value}
                   Data de fundação:${data.value}`)
                  
                } else {
                  let listaResutaldo = [];
                  let lista = [];
                  for (let i = 0; i < petName.length; i++) {
                    let petname = metodos.verificaNome(petName[i]);
                    lista[i] = petName[i].value;
                    listaResutaldo[i] = petname;
                  }
                  
                  let novaLista = lista.filter(item => item != '')
                  
                  if (listaResutaldo.some((item) => item == true)) {
                    alert(`
                    ENVIADO!
                    Nome Completo: ${nome.value} ${sobrenome.value}
                    CPF: ${cpf.value}
                    Empresa: ${nomeEmpresa.value}
                    Endereco: ${cnpj.value}
                    Data de fundação: ${data.value}`)

                   
            
                    for (let i = 0; i < novaLista.length; i++) {
                        alert(`
                        Meus pets são:
                        ${novaLista[i]} é um  ${dropdown[i].value}`)
                        
                    }
                    alert(`numero total de pets é: ${novaLista.length }`)
                    
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

//fiz uma pagina de cadastro com verificacoes e exibe as informacoes pelo alert.
// a ideia inicial era deixar a parte dos pets dinamica, fiz a funcao adicionar como voces podem ver nos metodos 
// e ela está funcional, porem nao consigo fazer as verificacoes nelas então optei por deixar estatico mas funcional
// a ideia era ir mudando para 3 páginas, dados pessoais se estivesse tudo certo dados empreasarias e se tudo okay mostrava os dados
// deu problema na hora de mudar de pagina dinamicamente e eu perdia os valores das variaveis, estou refazendo essa aplicação com o angular
// acredito que com o angular ela fique mais dinamica e mais funcional.
// Sei que tem muito a melhorar e quero muito aprender e melhorar com vocês!.
