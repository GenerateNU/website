import React, { useEffect, useState } from 'react';
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Search() {
    // Keep track of the search string the user inputs into the search bar
    const [searchQuery, setSearchQuery] = useState('');
    // Keep track of the search results in response to the user's search string
    const [searchResults, setSearchResults] = useState([]);
    const [positions, setPositions] = useState([]);


    // Supposed to get the data object containing the list of position objects
    const data = useFetch(`http://localhost:1337/api/positions`);

    useEffect(() => {
        const fetchAPositions = async () => {
          await axios
            .get(`http://localhost:1337/api/positions`)
            .then(async (res) => {
                setPositions(res.data);
                console.log("positionsgtfh", positions);
            });
        };
        fetchAPositions();
      }, []);

     const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        console.log("hsgdhg", e.target.value);
     }

     const searchPositions = (e) => {
        // handleSearch(e);
         console.log("inside searchPostions", positions.data);
         const query = searchQuery.toLowerCase();
         console.log("query", query)

         const filteredPositions = positions.data.filter((pos) => 
             pos.attributes.positionTitle === query
         );
            setSearchResults(filteredPositions);
            console.log(filteredPositions, "filteredPositions");
        }
     
     

    // // Changes the search results whenever the data or searchResults values change
    // useEffect(() => {
    //     if (data === null) {
    //         return <div>Error fetching data</div>;
    //     }
    //     // All positions listed in the database
    //     const positions = data.data.attributes;

    //     // Changes the search results based on the current searchQuery
    //     // by filtering out positions with titles that don't contain the 
    //     // searchQuery substring.
    //     // const filteredPositions = positions.filter(pos => {
    //     //     const query = searchQuery.toLowerCase();
    //     //     return pos.positionTitle.includes(query);
    //     // });
    //     // setSearchResults(filteredPositions);
    // }, [data, searchQuery]);

    return (
        <> 
            <form class="example" action="action_page.php">
                <input type="text" 
                        placeholder="search position" 
                        name="search"
                        value={searchQuery}
                        onInput={handleSearch}
                        onChange={searchPositions}
                />
                {/* <button type="submit" onClick={searchPostions}>
                    <i class="fa fa-search" style={{fontSize: "1.5em"}}></i>
                </button> */}
            </form>
            {/* The menu that pops up with the search results */}
            {
                // if searchQuery is an empty string (false), don't list any search results
                searchQuery &&
                <ul>
                    {/* List a link that sends the user to the position page of the clicked position */}
                    {searchResults.map(pos => <li><Link to={`/positions/${pos.id}`}>{pos.positionTitle}</Link></li>)}
                </ul>
            }
        </>
    );
}