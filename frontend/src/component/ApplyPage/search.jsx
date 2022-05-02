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

  

     const searchPositions = (e) => {
         const query = e.target.value.toLowerCase();
         const filteredPositions = positions.data.filter((pos) => 
             pos.attributes.positionTitle.toLowerCase() === query
         );
            setSearchResults(filteredPositions);
            // console.log(filteredPositions, "filteredPositions");
        }
     
     


    return (
        <> 
            <form class="example" action="action_page.php">
                <input type="text" 
                        placeholder="search position" 
                        name="search"
                        value={searchQuery}
                        onChange={searchPositions}
                />
                {/* <button type="submit" onClick={searchPostions}>
                    <i class="fa fa-search" style={{fontSize: "1.5em"}}></i>
                </button> */}
            </form>
            {/* The menu that pops up with the search results */}
            {
                // if searchQuery is an empty string (false), don't list any search results
                searchResults &&
                <ul>
                    {/* List a link that sends the user to the position page of the clicked position */}
                    {searchResults.map(pos => <li><Link to={`/positions/${pos.id}`}>{pos.positionTitle}</Link></li>)}
                </ul>
            }
        </>
    );
}