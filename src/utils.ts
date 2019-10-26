export const formatInput = (input: string) => {
  const lines = input.trim().split('\n');
  const nodes = lines.length;
  const depth = lines[0].length;
  const matrix = lines.map(line => [line]);
  return { matrix, nodes, depth };
};
