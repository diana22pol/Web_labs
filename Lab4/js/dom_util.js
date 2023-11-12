const itemsContainer = document.getElementById("items_container");
const getItemId = (id) => `item-${id}`;

const itemTemplate = ({id, name, country, rooms}) => `
<li id="${getItemId(id)}" class="card">
    <div class = "card_info">
        <h2 class="card_name">${name}</h2>
        <h2 class="card_country">${country}</h2>
        <h2 class="card_roms_num">${rooms}</h2>
        <button class="edit___button" onclick="window.location.href='./edit.html?${id}'">Edit</button>
    </div>    
</li>`;


export const addItemToPage = ({id, name, country, rooms}) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({id, name, country, rooms})
    );
};

export const renderItemsList = (hotels) => {
    itemsContainer.innerHTML = "";

    for(const hotel of hotels) {
        addItemToPage(hotel);
    }
};

