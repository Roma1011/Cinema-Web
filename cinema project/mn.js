const container=document.querySelector('.container');
const seats=document.querySelectorAll('row .seat:not(occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total');
const movieselect=document.getElementById('movie');

let ticketprice=+movieselect.value;
//ipdate
const updateselectedCount=function(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount=selectedSeats.length;
    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount*ticketprice;
}
//movie select event
movieselect.addEventListener('change',e=>{
    ticketprice=+e.target.value;
    updateselectedCount();
})
container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');
        updateselectedCount()
    }
})