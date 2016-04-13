'use strict';

(function (window) {

  /**
   * Private vars
   */
  var store = {};


  /**
   * Private methods
   */
  // Log Info
  function log(msg) {
    console.log(msg);
  }

  // Log Warning
  function warn(msg) {
    console.warn(msg);
  }

  // Log Error
  function err(msg) {
    console.error(msg);
  }

  // If the store's type matches the new value's type
  function typesMatch(store, value) {
    return typeof store === typeof value;
  }

  // Checks if the type can be mutated, returns boolean
  function canMutateType(store, value) {
    return typeof store === typeof value;
  }

  // Attempt to convert the new value into the type of the store, retuns newly type-mutated value
  function mutateType(store, value) {
    var storeType = typeof store;
    var valueType = typeof value;
    var typeConversions = {};

    // If types already match, just return the new value
    if (storeType === valueType) {
      return value;
    }

    // Converstion chart, converts from level 1 to level 2
    typeConversions = {
      number: {
        string: function () {
          return value.toString();
        },
        boolean: function () {
          if (value > 0) {
            return true;
          } else {
            return false;
          }
        }
      },
      string: {
        number: function () {
          if (value.indexOf('.') > -1) { // Has decimal
            return value.parseFloat();
          } else { // Is negative
            return value.parseInt();
          }
        },
        boolean: function () {
          if (value.lower === 'true') {

          } else {

          }
        }
      }
      boolean: {
        number: function () {

        },
        string: function () {

        }
      }
    };
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
    var cb;

    switch (typeof callback) {
      case 'undefined':
      case 'function':
        cb = callback || false;
        break;

      default:
        warn('A non-function was passed to a Stately.set() callback. I\'ll choose to ignore it for now... But please correct your code soon!');
        break;
    }

    if (typeof key === 'string') {
      if (!store.hasOwnProperty(key) || typesMatch(store[key], value)) { // New state property, or types match
        store[key] = value;
      } else if (canMutateType(store, value)) { // Existing state property & types are different & can be type mutated

      }
    } else if (typeof key === 'object') {

    }

    // After setting state, run the callback if one was specified
    if (cb) {
      cb();
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
