export const BatchSplicer = (names, avatars, ids, jobs, abouts, index) => {
  names.splice(index, 1);
  avatars.splice(index, 1);
  ids.splice(index, 1);
  jobs.splice(index, 1);
  abouts.splice(index, 1);
};
