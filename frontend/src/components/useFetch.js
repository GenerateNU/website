import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);

    const fetchPosition = async url => {
        console.log(url, "url")
        //change api call
        await  fetch(url).then((response) => {
            if(response.status >= 400) {
                throw new Error('Bad Response')
            }
            return response.json();
        }).then(data => {
            setData(data);
        });
    }

    useEffect(() => {
        fetchPosition(url)
    }, [url]);

    return data;
}