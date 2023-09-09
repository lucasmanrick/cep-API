let buttonZipCodeSearch = document.getElementById ('search-code-button')
let inputZipCode = document.getElementById ('input-search')
let getZipCodeResult = document.getElementById ('zipcode')
let getStreet = document.getElementById ('street')
let getComplement = document.getElementById ('complement')
let getNeighborhood = document.getElementById ('neighborhood')
let getLocality = document.getElementById ('locality')
let getUF = document.getElementById ('uf')

function searchCEP () {
  
  $.getJSON (`https://viacep.com.br/ws/${inputZipCode.value}/json/`)
    .done (function (cepReceive) {
      if (cepReceive.erro === 'true') {
        alert (`cep invalido`)
        return
      }

      getZipCodeResult.value = `${inputZipCode.value}`
      getStreet.value = `${cepReceive.logradouro}`
      if (cepReceive.complemento) {
        getComplement.value = `${cepReceive.complemento}`
      }else {
        getComplement.value = `n/a`
      }
      getNeighborhood.value = `${cepReceive.bairro}`
      getLocality.value = `${cepReceive.localidade}`
      getUF.value = `${cepReceive.uf}`
      inputShowCondition ()
    })
    .fail (function () {
      alert (`cep invalido`)
    })
}

function inputShowCondition () {
  let receiveInputsResult = [];

  receiveInputsResult.push (getZipCodeResult,getStreet,getComplement,getLocality,getNeighborhood,getUF)

  receiveInputsResult.forEach ((el) => {
    if (el.value) {
      el.classList = `input-show`
    }
  })
  
}

buttonZipCodeSearch.addEventListener ('click', searchCEP)



