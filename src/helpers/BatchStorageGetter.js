import { LocalStorageGetter } from "./LocalStorageGetter";

export const BatchStorageGetter = (props) => {
  const names = LocalStorageGetter("names") || props.name;
  const avatars = LocalStorageGetter("avatars") || props.avatar;
  const ids = LocalStorageGetter("ids") || props.id;
  const jobs = LocalStorageGetter("jobs") || props.job;
  const abouts = LocalStorageGetter("abouts") || props.about;

  return { names, avatars, ids, jobs, abouts };
};
