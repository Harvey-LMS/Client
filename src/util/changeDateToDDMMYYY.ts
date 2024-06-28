export const changeDateToDDMMYYYY = (date: string) => {
  if (date === "") return "";
  const dateArray = date.split("-");
  return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
};
