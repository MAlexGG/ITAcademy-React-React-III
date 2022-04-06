import axios from "axios";

export const apiStarwars = () => {
    
    let url = "https://swapi.dev/api/starships";
    
    const getShips = async (page) => {
        const res = await axios.get(`${url}/?page=${page}`);
        return res;
    };

    const getShipImg = async (id) => {
        const res = await axios.get(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
        return res;
    };

    const getNextPag = async (urlPage) => {
        const res = await axios.get(urlPage);
        return res;
    }

    return {
        getShips,
        getShipImg,
        getNextPag
    };
}