export const BatchPusher = (
  names,
  fullName,
  jobs,
  jobTitle,
  avatars,
  image,
  abouts,
  aboutState,
  i,
  ids
) => {
  names.push(fullName);
  jobs.push(jobTitle);
  avatars.push(image);
  abouts.push(aboutState);
  i++;
  ids.push(i.toString());
};
