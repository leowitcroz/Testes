import dados from './AgrupamentoExibicao.js'
import metodos from './metodos.js'

let gigashots =[]
let gabvine = []
let dynazzy =[]
let kaymbo =[]
let zazio =[]
let waterfree =[]





let userName = metodos.paraCadaObejto(dados.usuarios,'nome') // lista os nomes dos usuarios
let empresasName = metodos.paraCadaObejto(dados.empresas,'nome') //lista os nomes das empresas
let userEmpresaPadronizado = metodos.padronizaNomeDasEmpresas(dados.usuarios,'empresa')// padroniza no nome das empresas nos usuarios
let empresasENomesFiltrados = metodos.filtro(userEmpresaPadronizado,userName,empresasName)// separa os funcionarios de cada empresa



// separa os nomes por empresa
for( let i = 0; i < empresasENomesFiltrados.length;i++){


    if(empresasENomesFiltrados[i].empresa == 'Gigashots'){
        gigashots[i] = empresasENomesFiltrados[i].nome
    }
    else if(empresasENomesFiltrados[i].empresa == 'Gabvine'){
        gabvine[i] = empresasENomesFiltrados[i].nome
    }
    else if(empresasENomesFiltrados[i].empresa == 'Dynazzy'){
        dynazzy[i] = empresasENomesFiltrados[i].nome
    }
    else if(empresasENomesFiltrados[i].empresa == 'Kaymbo'){
        kaymbo[i] = empresasENomesFiltrados[i].nome
    }
    else if(empresasENomesFiltrados[i].empresa == 'Zazio'){
        zazio[i] = empresasENomesFiltrados[i].nome
    }
    else if(empresasENomesFiltrados[i].empresa == 'Waterfree'){
        waterfree[i] = empresasENomesFiltrados[i].nome
    }
  
}

let empresaGiga = gigashots.filter(item =>{
    return item !==undefined
})
let empresaGab = gabvine.filter(item =>{
    return item !== undefined
})
let empresaDya = dynazzy.filter(item =>{
    return item !== undefined
})
let empresaKay = kaymbo.filter(item =>{
    return item !==undefined
})
let empresaZaz = zazio.filter(item =>{
    return item !==undefined
})
let empresaWat = waterfree.filter(item =>{
    return item !==undefined
})















// faz o html

let tabela = document.getElementById("tabela-body")

for(let i = 0; i < empresaGiga.length ; i++){
    

    let html = `
    <tr>
       
            <td id='td'>${empresaGiga[i]}</td>
            <td id='td'>${empresaGab[i]}</td>
            <td id='td'>${empresaDya[i]}</td>
            <td id='td'>${empresaKay[i]}</td>
            <td id='td'>${empresaZaz[i]}</td>
            <td id='td'>${empresaWat[i]}</td>
            
    </tr>
    
    
    `;

   
  

    

 
    tabela.innerHTML += html
    

}

console.log(tabela.innerHTML)

let td = document.querySelectorAll('#td')

td.forEach(item => {
    if(item.innerHTML == 'undefined'){
        item.innerHTML = ''
    }
})



//aqui separei os usuarios por cada uma das empresas, tentei modularizar o maximo para deixar o codigo mais simples
//precisei primeiramente padronizar a forma que esstava escrito as empresas em cada objeto para depois filtrar cada um
// coloquei cada uma das informacoes em uma tabela simples usando o bootstrap.
//espero que tenham gostado, tenho muito a aprender e estou 101% disposto






