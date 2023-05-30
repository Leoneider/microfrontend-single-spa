// Anything exported from this file is importable by other in-browser modules.
import { configureStore } from "@reduxjs/toolkit";
import fruit from "./fruit";
import redux from './redux/store';

const createStore = () => {
  let count = 0;
  let productSelected = {};
  let subscribers = [];

  const unsubscribe = (fn) => {
    const index = subscribers.indexOf(fn);
    if (index > -1) {
      subscribers.splice(index, 1);
    }
  };

  return {
    get count() {
      return count;
    },
    incrementCount() {
      count += 1;
      subscribers.forEach((fn) => fn());
    },

    get productSelected() {
      return productSelected;
    },

    set productSelected(product) {
      productSelected = product;
      subscribers.forEach((fn) => fn());
    },

    subscribe(fn) {
      subscribers.push(fn);
      return () => unsubscribe(fn);
    },
  };
};

const store = createStore();



export default store;
export { fruit };
export { redux };
export { createUser, updateUser, resetUser, UserKey } from "./redux/states/user";
