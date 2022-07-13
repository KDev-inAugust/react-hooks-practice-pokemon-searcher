import React , {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({cardData}) {

const [cardSide, setCardSide] = useState("front");
const {id, name, hp, sprites} = cardData;



function cardClickToggle(){
  return (
 cardSide==="front" ? 
    setCardSide('back')
    :
    setCardSide('front')
  )
  }

  return (
    <Card>
      <div  onClick={cardClickToggle}>
        <div className="image">
          <img src={cardSide==="front" ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
