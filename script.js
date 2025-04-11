function hora(){
    //relogio recebe a data atual
    relogio = document.getElementById('relogio')
   relogio = new date

let tempo = new Date()
let horas = tempo.getHours();
let minutos = tempo.getMinutes();
let segundos = tempo.getSegundos();

relogio.innerHTML = `${horas}:${minutos}:${segundos}`