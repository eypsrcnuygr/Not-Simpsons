export const LocalStorageGetter = (name) => {
  return JSON.parse(localStorage.getItem(name));
};
