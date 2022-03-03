import { LocalStorageSetter } from "./LocalStorageSetter";

export const BatchStorageSetter = (names, jobs, ids, avatars, abouts) => {
  LocalStorageSetter("names", names);
  LocalStorageSetter("jobs", jobs);
  LocalStorageSetter("ids", ids);
  LocalStorageSetter("avatars", avatars);
  LocalStorageSetter("abouts", abouts);
};
