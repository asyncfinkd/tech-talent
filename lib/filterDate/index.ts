export function filterDate({ setDate, item }: any): void {
  let splitDay = item.createdAt.split("-");
  const oneDay: number = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate: Date = new Date(splitDay[0], splitDay[1] - 1, splitDay[2]);
  const secondDate: Date = new Date();

  // @ts-ignore
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  setDate(diffDays - 1);
}
