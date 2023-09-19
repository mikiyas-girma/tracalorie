
// Storage Controller



// Item Controller

const ItemCtrl = (function() {

  // Item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // the item data structure
  const data = {
    items: [
      {id: 1, name: 'Steak', calories: 1200 },
      {id: 2, name: 'ment', calories: 100 },
      {id: 3, name: 'Eggs', calories: 300 },
    ], 
    currents: null,
    totalCalories: 0
  }

  // public methods 
  return {
    getItems: function() {
      return data.items;
    },
    addItem: function(name, calories) {
      let ID;
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);

      return newItem;

    },
    logData: function() {
      return data;
    }
  }
  

})();

//UI controller

const UICtrl = (function() {

  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }
    // Public methods
    return {
      populateItemList: function(items) {
        let html = '';
        items.forEach((item) => {
          html +=  `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
        });
            // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
      },
      getItemInput: function() {
        return {
          name: document.querySelector(UISelectors.itemNameInput).value,
          calories: document.querySelector(UISelectors.itemCaloriesInput).value
        }
      },
      getSelectors: function() {
        return UISelectors;
      }
    }
})();

// App Controller

const App = (function(ItemCtrl, UICtrl) { 

  // Load event Listeners
  const loadEventListeners = function() {

    // get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // add item event 
      document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

    // add item submit
    const itemAddSubmit = function(e) {
      // get form input from UI controller
      const input = UICtrl.getItemInput();

      // check for name and calorie input 
      if(input.name !==''  && input.calories !== '') {
        // Add item
        const newItem = ItemCtrl.addItem(input.name, input.calories);
      }

      e.preventDefault();
    }

  // Public methods
  return {
    init: function(){
      //fetch items from data structure
    const items =   ItemCtrl.getItems();

    // populate list with items
    UICtrl.populateItemList(items);

    //load event listeners
    loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);

// Initialize App
App.init();