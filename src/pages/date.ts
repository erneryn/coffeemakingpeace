type DateProps = {
  cerated_date: string;
  location: string;
};

export default function Dates({ cerated_date, location }: DateProps) {
  const time = new Date(cerated_date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const dates =
    location.substring(location.indexOf(' ') + 1) +
    ', ' +
    months[time.getMonth()] +
    ', ' +
    time.getFullYear();

  return dates;
}
