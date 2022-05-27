import axios from 'axios';
import qs from 'qs';

const API_URI = process.env.REACT_APP_API_URI;
const POSITIONS_API = `${API_URI}/positions`;

export const findAllPositions = async () => {
    const response = await axios.get(POSITIONS_API);
    console.log("positionsddjs", response.data.data);
    return response.data.data;
};

export const searchPositions = async query => {
    const formattedQuery = qs.stringify({
        filters: {
            positionTitle: {
                $containsi: query,
            },
        },
    }, {
        encodeValuesOnly: true,
    });
    const response = await axios.get(`${POSITIONS_API}?${formattedQuery}`);
    const positions = response.data.data;
    return positions;
};

export const findPositionsByCategory = async currentCategory => {
    const query = qs.stringify({
        filters: {
            categoryType: {
                $eq: currentCategory,
            },
        },
    }, {
        encodeValuesOnly: true,
    });

    const response = await axios.get(`${POSITIONS_API}?${query}`);
    const positions = response.data.data;
    return positions;
};


export const findPosition = async id => {
    const response = await axios.get(`${POSITIONS_API}/${id}`);
    return response.data.data;
};

const filterPositions = async filterQuery => {
    const query = qs.stringify({
        filters: {
            filterQuery
        },
    }, {
        encodeValuesOnly: true,
    });

    const response = await axios.get(`${POSITIONS_API}?${query}`);
    const positions = response.data.data;
    return positions;
}