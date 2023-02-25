const Dia  = document.getElementById("dia");

const Horas = document.getElementById("contador");

const Minutos = document.getElementById("Minuto");

const Segundos = document.getElementById("Segundo");

const contagemparaonatal= "1 Jan 2024";

function contador(){

    const contagemparaonatalData = Date(contador); 
const dataatual = novaData();
const totalsegundos= (contagemparaonatalData-dataatual) / 1000;

const dia = Math.floor(totalsegundos/3600 / 24);
const horas = Math.floor(totalsegundos / 3600) % 24;
const minutos = Math.floor(totalsegundos /60)% 60;
const segundos = Math.floor(totalsegundos) % 60;

dia.innerHTML = dia;
horas.innerHTML= formatTime(horas);
minutos.innerHTML= formatTime(minutos);
segundos.innerHTML= formatTime(segundos);



}

function formatTime(time){
    return time < 10 ? "0${time}": time
}

 contador();

setInterval(contador,1000);

