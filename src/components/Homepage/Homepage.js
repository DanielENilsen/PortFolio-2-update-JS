
import React, { useState, useEffect } from "react";
import SearchFilter from "../search/SearchFilter";
import Row from "react-bootstrap/Row";




function HomePage() {
    const [GameCard, setGameCard] = useState([]);    
    const [CardFilter, setCardFilter] = useState([]);

    useEffect(() =>  {  
        fetch('https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games')
            .then(response => response.json())           
            .then(json => {
                setGameCard(json.results);
                setCardFilter(json.results);
            }).catch(error => console.log(error));
        }, []);


        // some of this codes are from module 4.4 but modifed for this assigment.
        const searchFilter = function(e) {
            const name = e.target.value.toLowerCase();    
            const filteredArray = GameCard.filter(function(char) {
            const nametype = char.name.toLowerCase();    
            if (nametype.startsWith(name)) {        
                   return true;
            }
            return false;
            });
                
            setCardFilter(filteredArray);
        };   
   

    return (
        <div>
            <SearchFilter  searchState={searchFilter} />
            <Row>
                {CardFilter.map(game => (
                    <article className = 'col-sm-3 col-lg-2 card news' key={game.id}>
                        <h3>{game.name}</h3>
                        <p>{game.rating}</p>
                        <p>{game.released}</p>
                        <img className="img-fluid" src={game.background_image} alt={game.slug} />
                       <a href={game.id}>See more</a>
                    </article>
                ))}
            </Row>
        </div>
    );
}

export default HomePage;