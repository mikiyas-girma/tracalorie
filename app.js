
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
    item: [
      {id: 1, name: 'Steak', calories: 1200 },
      {id: 2, name: 'ment', calories: 100 },
      {id: 3, name: 'Eggs', calories: 300 },
    ], 
    currentItem: null,
    totalCalories: 0
  }

  // public methods 
  return {
    getItems: function() {
      return data.item;
    },
    logData: function() {
      return data;
    }
  }
  

})();

//UI controller

const UICtrl = (function() {

  const UISelectors = {
    itemList: '#item-list'
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
      }
    }
})();

// App Controller

const App = (function(ItemCtrl, UICtrl) { 

  // Public methods
  return {
    init: function(){
      //fetch items from data structure
    const items =   ItemCtrl.getItems();
    // populate list with items
    UICtrl.populateItemList(items);
    }
  }

})(ItemCtrl, UICtrl);

// Initialize App
App.init();