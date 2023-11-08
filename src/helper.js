export const textTrim = (text, value) => {
  const words = text.split(" ");
  const firstTwoWords = words.slice(0, value).join(" ");
  return firstTwoWords;
};
