import React from "react";
import PropTypes from 'prop-types';






function DisplayCard ({name, image, description, altLink,link}) {      
    return (
        <div className = "cardGameDisplay">
                <h1>{name}</h1>
                <img src={image} alt={altLink} />                
                <div className = "description">{description}</div>
                <button><a href={link}>Link to website</a></button>
        </div>   
        
         
    );
}

DisplayCard.prototypes = {
    name:PropTypes.string,
    image:PropTypes.string,
    description:PropTypes.string,
    link:PropTypes.string    

}; 



export default DisplayCard;