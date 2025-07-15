
document.addEventListener('DOMContentLoaded', function() {
    const seatData = [
        "배철한", "박동욱", "김명화", "손광민",
        "이동욱", "박동욱", "윤은하", "장현진"
    ];

    const seatContainer = document.getElementById('seat-container');
    const randomBtn = document.getElementById('random-btn');

    function renderSeats(data) {
        seatContainer.innerHTML = '';
        data.forEach((name, idx) => {
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = `${idx + 1}. ${name}`;
            seatContainer.appendChild(seat);
        });
    }

    renderSeats(seatData);

    randomBtn.addEventListener('click', function() {
        randomBtn.disabled = true;
        randomBtn.textContent = '자리 선정 중...';
        setTimeout(function() {
            const shuffled = [...seatData];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            renderSeats(shuffled);
            randomBtn.disabled = false;
            randomBtn.textContent = '랜덤 자리 선정';
        }, 3000);
    });
});
