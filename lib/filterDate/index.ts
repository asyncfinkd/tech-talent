export function filterDate({ setDate, item }: any): void {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  let splitDay = item.createdAt.split("-");
  const firstDate: any = new Date(splitDay[0], splitDay[1] - 1, splitDay[2]);
  const secondDate: any = new Date();
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  setDate(diffDays - 1);
}
