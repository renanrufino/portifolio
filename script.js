var hamburguer = document.querySelector(".hamburguer");
var click = document.querySelector(".menu-link")

hamburguer.addEventListener("click", function () {
    var sidebar = document.querySelector(".container").classList.toggle("show-menu")
})

// click.addEventListener("click", function () {
//     var sidebar = document.querySelector(".container").classList.toggle("hide-menu");
// });




var qtdeAtual = document.querySelector("#qtde").addEventListener("change", atualizaPreco)
var jsAtual = document.querySelector("#js").addEventListener("change", function(){
    const temjs = document.querySelector("#js").checked
    if(temjs){
        document.querySelector("#qtde").value = 1
    }
    atualizaPreco()
} )

document.querySelector("#layout-sim").addEventListener("change", atualizaPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizaPreco)
document.querySelector("#prazo").addEventListener("change", atualizaPreco)


function CarregaPrazo(){
    document.querySelector("#prazo").value = 5
    document.querySelector("#qtde").value = 1
    document.querySelector("#preco").style.textAlign="center";
    atualizaPreco()
}

function atualizaPreco(){
    const qtde = document.querySelector("#qtde").value
    const temjs = document.querySelector("#js").checked
    const incluiLayput = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    
    let preco = qtde * 150
    if(temjs) preco *= 1.1
    if(incluiLayput) preco += 500
    let taxaUrgencia = 1 - prazo*0.1
    preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML = `valor estimado R$ ${preco.toFixed(2)}`
    if(prazo==1){
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
    }else{
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    }
}