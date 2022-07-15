import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  
  const [cardData, setCardData] = useState([])
  const [searchInput, setSearchInput]=useState("")
  const [formNameData, setFormNameData]=useState("");
  const [formHpData, setFormHpData]=useState("");
  const [frontImageData, setFrontImageData]=useState("");
  const [backImageData, setBackImageData]=useState("");
  


  useEffect (()=>{
    fetch('http://localhost:3001/pokemon')
    .then(res=>res.json())
    .then(data=>setCardData(data))
  },[])

const newPokemon={
  name:formNameData,
  hp:formHpData,
  sprites: {
    front: frontImageData,
    back: backImageData
  }
}

console.log(newPokemon)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setBackImageData={setBackImageData} setFrontImageData={setFrontImageData} setFormHpData={setFormHpData} setFormNameData={setFormNameData}/>
      <br />
      <Search setSearchInput={setSearchInput} searchInput={searchInput}/>
      <br />
      <PokemonCollection cardData={cardData} setCardData={setCardData} searchInput={searchInput}/>
    </Container>
  );
}

export default PokemonPage;
