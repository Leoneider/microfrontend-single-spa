export const persistLocalStorage = <T,>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStorage = (key: string) => {
  console.log('clear');
  localStorage.removeItem(key);
};
