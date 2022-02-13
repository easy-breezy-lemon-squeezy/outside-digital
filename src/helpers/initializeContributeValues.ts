export const initializeContributeValues = (value: string): string[] => {
  const trimmedValue = value.split(' ').join('');
  const contribution: string = Math.floor(Number(trimmedValue) * 12 * 0.13).toString();
  const values: string[] = new Array(4).fill(contribution);

  values[values.length - 1] = Math.floor(Number(values[3]) / 3).toString();

  return values;
};
