function paraCadaObejto(colecao,atributo){
    let resultado = colecao.map((obj) => {
        return obj[atributo]
    })

  return resultado

}

function filtro(userEmpresa,userName,empresasName){
    let modificado = []

    for(let i = 0; i < userEmpresa.length; i++){
        for(let empresas of empresasName){
            if(userEmpresa[i] == empresas){
                modificado[i] = {
                    empresa: empresas,
                    nome: userName[i],

                };
            }
        }
    }

    return modificado
}






function padronizaNomeDasEmpresas(colecao,atributo){
    let resultado = colecao.map((obj) => {
        let inicial = obj[atributo].toLowerCase()
        

        let letraInicial = inicial.charAt(0).toUpperCase();
        
  
        let restoTexto = inicial.slice(1);
  
        inicial = letraInicial + restoTexto;
        return inicial
        
      });

      return resultado
     
}


export default{
    paraCadaObejto:paraCadaObejto,
    filtro:filtro,
    padronizaNomeDasEmpresas:padronizaNomeDasEmpresas
}