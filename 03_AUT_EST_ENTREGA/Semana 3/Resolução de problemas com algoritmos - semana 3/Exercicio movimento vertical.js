function calcular(){
    var vi = document.getElementById('Velocidade Inicial').value;
    var altura = document.querySelector('div#altura')
    var h = vi*vi/20
    altura.innerHTML = `Altura: ${h} metros`
    var tempo = document.querySelector('div#tempo')
    var t = vi/10
    tempo.innerHTML = `Tempo: ${t}segundos`
}