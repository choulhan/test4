const seatData = [
    "배철한", "박동욱", "김명화", "손광민",
    "이동욱", "박동욱", "윤은하", "장현진"
];

const seatContainer = document.getElementById('seat-container');
const randomBtn = document.getElementById('random-btn');

function renderSeats(data = seatData) {
    seatContainer.innerHTML = '';
    data.forEach((name, idx) => {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.textContent = `${idx + 1}. ${name}`;
        seatContainer.appendChild(seat);
    });
}

renderSeats();

randomBtn.addEventListener('click', () => {
    randomBtn.disabled = true;
    randomBtn.textContent = '자리 선정 중...';
    setTimeout(() => {
        const shuffled = [...seatData].sort(() => Math.random() - 0.5);
        renderSeats(shuffled);
        randomBtn.disabled = false;
        randomBtn.textContent = '랜덤 자리 선정';
    }, 3000);
});
