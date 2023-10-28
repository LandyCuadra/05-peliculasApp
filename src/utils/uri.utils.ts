export const getImageUri = (imagePath: string | null) => {
  if (!imagePath) {
    return;
  }
  return `https://image.tmdb.org/t/p/w500${imagePath}`;
};
