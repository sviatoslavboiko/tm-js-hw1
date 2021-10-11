const input = document.querySelector('#item');
const output = document.querySelector('.output');
const btnAdd = document.querySelector('.add');
const btnRemove = document.querySelector('.remove');

const MAXIMUM_ITEMS = 21;
let ITEMS = JSON.parse(localStorage.getItem('items')) || [];
let COUNT_OF_ITEMS = JSON.parse(localStorage.getItem('count')) || 0;

const paintItems = () => {
  const items = ITEMS.reduce((previousValue, currentValue) => 
  (previousValue += `<button class="btn btn-secondary mr-3 mb-3">${currentValue}</button>`), []);
  output.innerHTML = items
}

paintItems();

const addItem = () => {
  if (COUNT_OF_ITEMS >= MAXIMUM_ITEMS) {
    alert("Maximum items");
    return
  }
  
  if (!input.value) {
    alert('Enter item');
    return
  }

  ITEMS.unshift(input.value);
  paintItems();
  ++COUNT_OF_ITEMS;
  input.value = ''
}

const removeItem = () => {
  if(COUNT_OF_ITEMS <= 0){
    alert('No items!');
    return
  }

  ITEMS.pop();
  paintItems();
  --COUNT_OF_ITEMS
}

btnAdd.addEventListener('click', addItem);

document.addEventListener('keydown', (event) =>{
  event.key === 'Enter' ? addItem() : null
});

btnRemove.addEventListener('click', removeItem);

document.addEventListener('keydown', (event) =>{
  event.key === 'Delete' ? removeItem() : null
});

window.addEventListener('unload', () => {
  localStorage.setItem('items', JSON.stringify(ITEMS));
  localStorage.setItem('count', JSON.stringify(COUNT_OF_ITEMS))
});
