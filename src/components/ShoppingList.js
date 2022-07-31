import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange (e){
    setSelectedCategory(e.target.value)
  }

  const itemsToDisplay = items
  //For my category filter
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
  //For my Search filter
  //When the user types in this field, the list of items should be filtered so that only items with names that match the text are included
  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItems}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={setSearch} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;