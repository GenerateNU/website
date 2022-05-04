import axios from 'axios';

const API_URI = process.env.REACT_APP_API_URI;
const CATEGORIES_API = `${API_URI}/categories`;

export const findAllCategories = async () => {
    const response = await axios.get(CATEGORIES_API);
    return response.data.data;
};