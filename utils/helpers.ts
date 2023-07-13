export const splitText = (text: string, length: number) => {
  const words = text.split(" ");
  let result = [];
  let currentPart = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const newPart = currentPart + (currentPart.length > 0 ? " " : "") + word;

    if (newPart.length > length) {
      result.push(currentPart);
      currentPart = word;
    } else {
      currentPart = newPart;
    }
  }

  if (currentPart.length > 0) {
    result.push(currentPart);
  }

  return result;
};
