export const convertToRubString = (index: number): string => {
  let firstOccurance: string;
  let secondOccurance: string;

  if (index === 2) {
    firstOccurance = 'во';
  } else {
    firstOccurance = 'в';
  }

  if (index === 1 || index === 4) {
    secondOccurance = '-ый год';
  } else if (index === 2) {
    secondOccurance = '-ой год';
  } else {
    secondOccurance = '-ий год';
  }

  return `${firstOccurance} ${index}${secondOccurance}`;
};
