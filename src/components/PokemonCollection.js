import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({cardData}) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>{cardData.map((index)=>
      {
        return <PokemonCard key={index.id} cardData={index}/>
      }
      )}</h1>
    </Card.Group>
  );
}

export default PokemonCollection;
