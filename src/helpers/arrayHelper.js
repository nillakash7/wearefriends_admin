export default function sortBy(key, isDesc) {
  const moveSmaller = isDesc ? 1 : -1;
  const moveLarger = isDesc ? -1 : 1;

  return (a, b) => {
    if (a[key] < b[key]) return moveSmaller;
    if (a[key] > b[key]) return moveLarger;
    return 0;
  };
}
