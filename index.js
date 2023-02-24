const dia = document.getElementById("dia");

const horas= document.getElementById("horas");

const minutos = document.getElementById("minutos");

const segundos = document.getElementById("segundos");

const contagemparaonatalem = "1 Jan 2024";

function contador(){

    const contagemparaonatalemDate=NovaData("contagemparaonatalem"); 
const dataatual= novaData();
const totalsegundos= (contagemparaonatalem -dataatual) / 1000;

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
    return time < 10 ? "o${time}": time
}

contador();

setInterval(contador,1000);

