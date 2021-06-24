const movieSelected = document.querySelector('#movie')
const container = document.querySelector('.container');
const seats = container.querySelectorAll('.seat');
const occupiedSeats =  container.querySelectorAll('.occupied')
const totalSelected = document.querySelector('span#count');
const totalPrice = document.querySelector('span#total');

let unitSeatPrice = +movieSelected.value;
const selectedSeatNumbers = new Set();
let totalPriceAmt = 0;

const seatOccupied = seat => seat.classList.contains('occupied');
const seatSelected = seat => seat.classList.contains('selected');

const rerenderUI = function() {
   totalSelected.textContent = selectedSeatNumbers.size;
   totalPrice.textContent = totalPriceAmt;
}

const modifyTotalAmt = function() {
   totalPriceAmt = selectedSeatNumbers.size * unitSeatPrice
}

const addSeat = function(i) {
   if (selectedSeatNumbers.has(i + 1)) return;
   selectedSeatNumbers.add(i + 1);
   modifyTotalAmt()
   rerenderUI()
}

const removeSeat = seatNo => {
   selectedSeatNumbers.delete(seatNo);
   modifyTotalAmt();
   rerenderUI()
}

seats.forEach((seat, i) => {
   seat.addEventListener('click', ev => {
      const seatClicked = ev.currentTarget;
      seatClicked.classList.toggle('selected');

      if (seatOccupied(seatClicked)) return;
      if (seatSelected(seatClicked)) addSeat(i)
      else removeSeat(i + 1);
      
   })
})
movieSelected.addEventListener('change', ev => {
   unitSeatPrice = +ev.target.value
   modifyTotalAmt();
   rerenderUI()
})