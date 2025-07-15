const seatData = [
    "배철한", "박동욱", "김명화", "손광민",
    "이동욱", "박동욱", "윤은하", "장현진"
];

const seatContainer = document.getElementById('seat-container');

function renderSeats() {
    seatContainer.innerHTML = '';
    seatData.forEach((name, idx) => {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.textContent = `${idx + 1}. ${name}`;
        seatContainer.appendChild(seat);
    });
}

renderSeats();
