function verificaNome(nome) {
    if (nome.value == "") {
        nome.style.border = '2px solid red'
        return false;
      } else {
        nome.style.border = '2px solid green'
        return true;
      }
    
    }



    function adiciona(campo) {
        let contador

        let html = `
          <div class="inputs-pet">
          <div class="col-md-6">
              <label for="" class="form-label"></label>
              <input type="text" class="form-control" id="petname"  placeholder="Nome do seu pet">
            </div>
            <div class="col-md-5">
              <label for="" class="form-label"></label>
              <select class="form-select" id="dropdown" >
                <option>Cachorro</option>
                <option>Gato</option>
                <option>Pássaro</option>
                <option>Hamster</option>
                <option>Peixe</option>
              </select>
            </div>
      </div>
          `;
        campo.innerHTML += html;

       
      }    




    export default{
        verificaNome:verificaNome,
        adiciona:adiciona
    }