import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({cardData, setCardData, searchInput}) {

  //--------send the search data down to here and make the function that finds the right card.
  console.log('Pokemon Collection: ', searchInput);

  let cardsToRender=[];

  cardData.map((index)=>{
    if(index.name.includes(searchInput)){
      cardsToRender.push(index)
    }
  })

 

  return (
    <Card.Group itemsPerRow={6}>
      <h1>{cardsToRender.map((index)=>
      {
        return <PokemonCard key={index.id} cardData={index}/>
      }
      )}</h1>
    </Card.Group>
  );
}

export default PokemonCollection;


