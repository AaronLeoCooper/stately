'use strict';

(function (window) {

  /**
   * Private vars
   */
  var store = {};


  /**
   * Private methods
   */
  // If the store's type matches the new value's type
  function typesMatch(store, new) {
    return typeof store === typeof new;
  }

  // Attempt to convert the new value into the type of the store
  function mutateType(store, new) {
    var storeType = typeof store;

    switch (storeType) {
      case 'number':
        
        break;
    }
  }


  /**
   * Init
   */
  this.Stately = function (initState) {

  };


  /**
   * Public methods
   */
  Stately.prototype.set = function (key, value, callback) {
    if (typeof key === 'string') {
      if (!store.hasOwnProperty(key) || typesMatch(store[key], value)) { // New state property
        store[key] = value;
      } else { // Existing state property

      }
    } else if (typeof key === 'object') {

    }
  };

  Stately.prototype.get = function (key, value, callback) {

  };

})(window);

window.onload = function () {

  var state = new Stately();
  var testA;

  state.set('test', 'hello', function () {
    console.log('test has been updated');
  });

  testA = state.get('test');

  console.log(testA);

  // var appendToBody = function (a) {
  //   switch (a) {
  //     case 'all':
  //       document.getElementsByTagName("body")[0].innerHTML += 'State accessed! (all)';
  //       break;
  //
  //     case 'get':
  //       document.getElementsByTagName("body")[0].innerHTML += 'State accessed! (get)';
  //       break;
  //
  //     case 'set':
  //       document.getElementsByTagName("body")[0].innerHTML += 'State accessed! (set)';
  //       break;
  //   }
  // };

};
