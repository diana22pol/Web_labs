window.onload = function() {
    const hotelId = window.location.search.substring(1);

    fetch(`http://localhost:8080/hotels/${hotelId}`)
        .then(response => response.json())
        .then(hotel => {
            // Fill the form fields with the helicopter data
            document.getElementById('name_input').value = hotel.name;
            document.getElementById('country_input').value = hotel.country;
            document.getElementById('rooms_input').value = hotel.rooms;
        })
        .catch(() => {
            alert('Helicopter not found');
        });
}

document.getElementById('edit_hotel').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name_input').value
    const country = document.getElementById('country_input').value
    const rooms = document.getElementById('rooms_input').value

    const hotelId = window.location.search.substring(1);

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

    const updatedHotel = {
        id: parseInt(hotelId),
        name: name,
        country: country,
        rooms: parseInt(rooms)
    }

    fetch(`http://localhost:8080/hotels/${hotelId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedHotel)
    })
        .then(response => response.json())
        .then(() => {
            window.location.href = './index.html';
        })
        .catch(() => {
            alert('Error updating helicopter');
        });
});
