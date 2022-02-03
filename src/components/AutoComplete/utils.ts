export const createMatchedData = (
  wordList: string[],
  includeWord: string,
): { word: string; isSelected: boolean }[] =>
  wordList
    .filter((cash) => cash.includes(includeWord))
    .map((word) => ({ word, isSelected: false }));
