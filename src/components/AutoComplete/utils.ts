import { Dispatch, SetStateAction } from 'react';
import { matchedType } from '.';

export const createMatchedData = (wordList: string[], includeWord: string): matchedType =>
  wordList
    .filter((cash) => cash.includes(includeWord))
    .map((word) => ({ word, isSelected: false }));

export const useUpdateInputAndCloseMated = (
  word: string,
  relatedWord: string[],
  setShowMatched: Dispatch<SetStateAction<boolean>>,
  setAutoCompleteInput: Dispatch<SetStateAction<string>>,
  setMatched: Dispatch<SetStateAction<matchedType>>,
) => {
  setShowMatched(false);
  setAutoCompleteInput(word);
  const filteredCashes = createMatchedData(relatedWord, word);
  setMatched(filteredCashes);
};
