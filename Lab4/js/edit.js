document.getElementById('edit_hotel').addEventListener('submit', function(event) {
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

    const hotelId = window.location.search.substring(1); // Get the hotel ID from the URL
    let hotels = JSON.parse(localStorage.getItem('hotels')) || [];

    // Find the hotel with the given ID
    let hotel = hotels.find(hotel => hotel.id === parseInt(hotelId));
    if (!hotel) {
        alert('Hotel not found');
        return;
    }

    // Update the hotel data
    hotel.name = name;
    hotel.country = country;
    hotel.rooms = parseInt(rooms);

    // Save the updated hotels list to localStorage
    localStorage.setItem('hotels', JSON.stringify(hotels));

    window.location.href = './index.html';
});
