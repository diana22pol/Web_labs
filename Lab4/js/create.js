document.getElementById('create_hotel').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name_input').value;
    const country = document.getElementById('country_input').value;
    const rooms = document.getElementById('rooms_input').value;

    // Перевірка введених даних
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('Назва готелю повинна містити тільки букви');
        return;
    }
    if (!/^[a-zA-Z\s]+$/.test(country)) {
        alert('Назва країни повинна містити тільки букви');
        return;
    }
    if (!/^\d+$/.test(rooms)) {
        alert('Кількість номерів повинна бути числом');
        return;
    }

    const newHotel = {
        id: Date.now(),
        name: name,
        country: country,
        rooms: parseInt(rooms)
    };

    let hotels = JSON.parse(localStorage.getItem('hotels')) || [];
    hotels.push(newHotel);
    localStorage.setItem('hotels', JSON.stringify(hotels));

    window.location.href = './index.html';
});

