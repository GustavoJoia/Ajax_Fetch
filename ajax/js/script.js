
// let url = 'http://localhost/ajax/backEnd/controller/produtoController.php'
let url = 'http://127.0.0.1:5500/ajax/lista_produto.json'


// requisição HTTP do tipo GET

fetch(url)     // definindo a requisição
    
    // tratamento da resposta
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
    })