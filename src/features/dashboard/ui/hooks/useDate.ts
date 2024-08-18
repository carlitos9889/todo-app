interface Props {
  currentDate: Date;
}

export const useDate = ({ currentDate }: Props) => {
  const DAYS_OF_WEEK: { [key: number]: string } = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  const getCurrentDay = () => {
    const currentDay = currentDate.getDay();
    return DAYS_OF_WEEK[currentDay];
  };

  const getCurrentDate = () => {
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = currentDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return {
    getCurrentDate,
    getCurrentDay,
  };
};
