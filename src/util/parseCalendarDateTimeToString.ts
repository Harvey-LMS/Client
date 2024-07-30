import { parseDateTime, getLocalTimeZone, CalendarDateTime } from '@internationalized/date';

const formatCalendarDateTime = (dateTime: CalendarDateTime): string => {
   const pad = (num: number) => num.toString().padStart(2, '0');

   const hours = pad(dateTime.hour);
   const minutes = pad(dateTime.minute);
   const day = pad(dateTime.day);
   const month = pad(dateTime.month);
   const year = dateTime.year;

   return `${day}/${month}/${year}, ${hours}:${minutes} `;
};

export default formatCalendarDateTime;
