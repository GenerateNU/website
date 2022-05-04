import axios from 'axios';
import qs from 'qs';

const API_URI = process.env.REACT_APP_API_URI;
const POSITIONS_API = `${API_URI}/positions`;

export const findPositions = async query => {
    console.log(`query: ${query}`)
    const formattedQuery = qs.stringify({
        filters: {
            positionTitle: {
                $containsi: query,
            },
        },
    }, {
        encodeValuesOnly: true,
    });

    // const response = await axios.get(`${POSITIONS_API}?${formattedQuery}`);
    const response = await axios.get(`${POSITIONS_API}/1`);
    const positions = response.data.data;
    return [positions]; // return positions;
}