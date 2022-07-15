import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handlePostNew, setFormNameData, setFormHpData, setFrontImageData, setBackImageData}) {


function handleSubmit(e){
e.preventDefault();
console.log('handle submit');
handlePostNew();
}

function handleNameChange(e){
  setFormNameData(e.target.value)
}

function handleHpChange(e){
  setFormHpData(e.target.value)
}

function handleFrontImageChange(e){
  setFrontImageData(e.target.value)
}

function handleBackImageChange(e){
  setBackImageData(e.target.value)
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleNameChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleHpChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
          onChange={handleFrontImageChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
          onChange={handleBackImageChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

