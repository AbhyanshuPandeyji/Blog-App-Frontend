// use this when the calls are made from within the app without redux , otherwise it will require double parse or will require the unnecessary parsings or stringify

export const setStorageItem = async (key , data) => {
  //   console.log("data in local storage", data);
  return localStorage.setItem(key, JSON.stringify(data));
};

export const getStorageItem = async (key , store) => {
  return localStorage.getItem(key);
};

export const removeStorageItem = async (key , store) => {
  return localStorage.removeItem(key);
};


// export const getItemFromStore = (key, store = localStorage) => {
//   return store.getItem(key);
// };

// export const setItemToStore = (key, payload, store = localStorage) =>
//   store.setItem(key, JSON.stringify(payload));

// export const removeItemFromStore = (key, store = localStorage) => {
//   return store.removeItem(key);
// };
