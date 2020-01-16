const BASE_URL = 'https://thinkful-list-api.herokuapp.com/chris';

function getItems(){
  return  fetch(`${BASE_URL}/items`);
}

function createItem(name){
    let newItem = {
        name: name
    };
    newItem = JSON.stringify(newItem);

    return fetch(`${BASE_URL}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, body: newItem})
}

export default {
    getItems,
    createItem
};