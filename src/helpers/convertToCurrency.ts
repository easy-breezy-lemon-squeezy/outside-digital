export const convertToCurrency = (value: string): string => {
  let trimmedValue: string = value.split(' ').join('');
  let spaceCount: number = Math.floor((trimmedValue.length - 1) / 3);

  if (spaceCount <= 0) return value;

  let reversedValue: string = trimmedValue.split('').reverse().join('');
  let result: string = '';
  let i: number = 0;

  const index: number = 3;

  while (spaceCount > 0) {
    const cuttedPart = reversedValue.substring(i * 3, index * (i === 0 ? 1 : i + 1));

    result += cuttedPart + ' ';

    spaceCount--;
    i++;

    if (spaceCount === 0) {
      result += reversedValue.substr(i * 3);
    }
  }

  return result.split('').reverse().join('');
};
