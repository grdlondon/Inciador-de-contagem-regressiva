const Dia  = document.getElementById("dia");

const Horas = document.getElementById("Horas");

const Minutos = document.getElementById("Minuto");

const Segundos = document.getElementById("Segundo");

const ContagemParaONatalEm= "1 Jan 2024";

function contador(){

    const ContagemParaONatalEmData = Date(contador); 
const DataAtual = novadata();
const TotalSegundos= (ContagemParaONatalEmData-DataAtual) / 1000;

const Dia = Math.floor(TotalSegundos/3600 / 24);
const Horas = Math.floor(TotalSegundos / 3600) % 24;
const Minutos = Math.floor(TotalSegundos /60)% 60;
const Segundos = Math.floor(TotalSegundos) % 60;

Dia.innerHTML = dia;
Horas.innerHTML= formatTime(Horas);
Minutos.innerHTML= formatTime(Minutos);
Segundos.innerHTML= formatTime(Segundos);



}

function formatTime(time){
    return time < 10 ? "0${time}": time
}

 contador();

setInterval(contador,1000);

