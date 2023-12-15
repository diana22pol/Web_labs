document.getElementById('create_hotel').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name_input').value
    const country = document.getElementById('country_input').value
    const rooms = document.getElementById('rooms_input').value

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

    console.log(name)
    const newHotel = {
        id: 0,
        name: name.toString(),
        country: country.toString(),
        rooms: parseInt(rooms)
    }

    fetch('http://localhost:8080/hotels', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newHotel)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            window.location.href = './index.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
