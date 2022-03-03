export const LocalStorageSetter = (name, item) => {
  if (item) {
    localStorage.setItem(name, JSON.stringify(item));
  }
};
