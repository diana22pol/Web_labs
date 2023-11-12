import {
    addItemToPage, 
    renderItemsList
} from "./dom_util.js"

const clearButton = document.getElementById("clear_button");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search_button");
const calculateButton = document.getElementById("calculate_button");
const resultPlace = document.getElementById("result");
const sortHotels = document.getElementById("sort_button");

let hotels = [
    {id: 1, name: "Beach Resort", country: "Spain", rooms: 568},
    {id: 2, name: "Mirada Del Mar", country: "Egypt", rooms: 3086},
    {id: 3, name: "Teppo Del Resort", country: "Bulgaria", rooms: 702}
];

hotels.forEach(hotel => addItemToPage(hotel));

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


sortHotels.addEventListener("click", () => {
    hotels.sort((a, b) => a.rooms - b.rooms);
    renderItemsList(hotels);
});


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