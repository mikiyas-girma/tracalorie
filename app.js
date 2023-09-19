
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
    Item: [
      {id: 1, name: 'Steak', calories: 1200 },
      {id: 2, name: 'ment', calories: 100 },
      {id: 3, name: 'Eggs', calories: 300 },
    ], 
    currentItem: null,
    totalCalories: 0
  }

  // public methods 
  return {
    logData: function() {
      return data;
    }
  }
  

})();

//UI controller

const UICtrl = (function() {

    // Public methods
    return {

    }
})();

// App Controller

const App = (function(ItemCtrl, UICtrl) {

  // Public methods
  return {
    init: function(){
      console.log('Initializing App...');
    }
  }

})(ItemCtrl, UICtrl);

// Initialize App
App.init();