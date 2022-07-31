import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setName] = useState("");
  const [itemCategory, setCategory] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const newItem = {
      //generate a universal unique ID for our items
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    onItemFormSubmit(newItem)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={(e) => setName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;