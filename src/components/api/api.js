import axios from "axios";

export function getFilteredAndSortedHotels(title, sortBy, sortOrder, price) {
    return axios.get('http://localhost:8080/hotels/filteredAndSorted', {
        params: {
            title: title,
            sortBy: sortBy
        }
    });
}


export function getAllHotels() {
    return axios.get('http://localhost:8080/hotels').then(response=>{
        return response.data
    })
}


export function getHotelbyId(id) {
    return axios.get(`http://localhost:8080/hotels/${id}`).then(response => {
        return response.data;
    });
}

export const searchHotelByTitle = async (title) => {
    try {
        const response = await axios.get('http://localhost:8080/hotels/search', {
            params: {
                title: title
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching hotels by title:', error);
        throw error;
    }
};

