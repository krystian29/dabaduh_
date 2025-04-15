function hora(){
    //relogio recebe a data atual
    relogio = document.getElementById('relogio')
   relogio = new date

let tempo = (new Date())
let horas = (tempo.getHours()).padStart(2,'0');
let minutos = (tempo.getMinutes()).padStart(2,'0');
let segundos = (tempo.getSegundos());

relogio.innerHTML = `${horas}:${minutos}:${segundos}`
}
setInterval(hora,1000)