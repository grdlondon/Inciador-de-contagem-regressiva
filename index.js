let dia  = document.getElementById("dias");

let horas = document.getElementById("horas");

let minutos = document.getElementById("minutos");

let segundos = document.getElementById("segundos");

const contagemparaonatal= "1 Jan 2024";

function contador(){

    const contagemparaonatalData =  new Date(contagemparaonatal); 
const dataatual = new Date();
const totalsegundos= (contagemparaonatalData-dataatual) / 1000;

  let diaconteudo = Math.floor(totalsegundos/3600 / 24);
  let horasconteudo = Math.floor(totalsegundos / 3600) % 24;
  let minutosconteudo = Math.floor(totalsegundos /60)% 60;  let segundosconteudo = Math.floor(totalsegundos) % 60;

dia.innerHTML = formatTime(diaconteudo);
horas.innerHTML= formatTime(horasconteudo);
minutos.innerHTML= formatTime(minutosconteudo);
segundos.innerHTML= formatTime(segundosconteudo);



}

function formatTime(time){
    return time < 10? `0${time}`: time;
}

 contador();

setInterval(contador,1000);

