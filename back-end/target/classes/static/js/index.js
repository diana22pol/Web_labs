import {
    getInputValues,
    clearInputs,
    addItemToPage,
    renderItemsList,
    itemsContainer
} from "./dom_util.js";

const clearButton = document.getElementById("clear_button");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search_button");
const calculateButton = document.getElementById("calculate_button");
const resultPlace = document.getElementById("result");
const sortHotels = document.getElementById("sort_button");
const submitButton = document.getElementById("submit_button")

let hotels = [];
let filteredHotels = [];

window.onload = function() {
    fetch('http://localhost:8080/hotels')
        .then(response => response.json())
        .then(data => {
            hotels = data;
            filteredHotels = [...hotels];
            renderItemsList(hotels);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const searchValue = searchInput.value.toLowerCase();
    const filteredHotels = hotels.filter(hotel => hotel.name.toLowerCase().includes(searchValue));
    renderItemsList(filteredHotels);
});

clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    searchInput.value = "";
    renderItemsList(hotels);
});

sortHotels.addEventListener("click", () => {
    hotels.sort((a, b) => a.rooms - b.rooms);
    renderItemsList(hotels);
});
function calculateTotalRooms(hotels) {
    let totalRooms = 0;
    for (let i = 0; i < hotels.length; i++) {
        totalRooms += hotels[i].rooms;
    }
    return totalRooms;
}

calculateButton.addEventListener("click", () => {
    let totalRooms = calculateTotalRooms(hotels);
    resultPlace.textContent = totalRooms;
});

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const newHelicopter = getInputValues();

    fetch('http://localhost:8080/hotels', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newHelicopter)
    })
        .then(response => response.json())
        .then(data => {
            addItemToPage(data);
            clearInputs();
            hotels.push(data);
            filteredHotels.push(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

