

const key = "76eb66c34fd1f7b28f1a59fdd4efdd17"

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".city").innerHTML = dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-prev").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarLocal(input) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const input = document.querySelector(".input-entrada").value

    buscarLocal(input)
}