const nameInput = document.getElementById("name_input");
const countryInput = document.getElementById("country_input");
const roomsInput = document.getElementById("rooms_input");
export const itemsContainer = document.getElementById("items_container")

const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, name, country, rooms }) => `
<li id="${getItemId(id)}" class="card">
    <div class = "card_info">
        <h2 class="card_name">${name}</h2>
        <h2 class="card_country">${country}</h2>
        <h2 class="card_roms_num">${rooms}</h2>
        <button class="edit___button" onclick="window.location.href='./edit.html?${id}'">Edit</button>
        <button class="delete___button" onclick="deleteHotel(${id})">Delete</button>
    </div>    
</li>`;

export const getInputValues = () => {
    return {
        name: nameInput.value,
        price: countryInput.value,
        seats: parseInt(roomsInput.value)
    }
};

export const clearInputs = () => {
    nameInput.value = "";
    countryInput.value = "";
    roomsInput.value = "";
}

export const addItemToPage = ({ id, name, country, rooms }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, country, rooms })
    )
}

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
}

window.onload = function() {
    fetch('http://localhost:8080/hotels')
        .then(response => response.json())
        .then(data => {
            renderItemsList(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

let hotels = [];
let filteredHotels = [];

window.deleteHotel = function(id) {
    fetch(`http://localhost:8080/hotels/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            document.getElementById(getItemId(id)).remove();
            return fetch('http://localhost:8080/hotels');
        })
        .then(response => response.json())
        .then(data => {
            hotels = data; // Оновлюємо локальний список готелів
            filteredHotels = [...hotels]; // Оновлюємо фільтрований список готелів
            renderItemsList(data);
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}




