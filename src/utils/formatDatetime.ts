export type Transfer = typeof import('../../mockData/transfers_list.json')[0];
export type TransferAfterFormat = Transfer & { groupText: any; rowText: any };

const isToday = (datetime: Date) => {
  const day = datetime.toDateString();
  const today = new Date().toDateString();

  if (day === today) return true;
  return false;
};

const isTomorrow = (datetime: Date) => {
  const day = datetime.toDateString();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (day === tomorrow.toDateString()) return true;
  return false;
};

export const formatDatetime = (date: Date) => {
  const monthAndWeekday = date.toLocaleString('en-GB', {
    month: 'long',
    weekday: 'long',
    day: '2-digit',
  });

  const [weekday, dayDigit, month] = monthAndWeekday.split(/(?:,| )+/);
  const cleanDayDigit = parseInt(dayDigit, 10).toString();

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTime = date.toLocaleString('en-GB', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
  });
  const formattedObject = {
    rowText: isToday(date)
      ? `Today, ${cleanDayDigit} ${month}, ${localTime}`
      : isTomorrow(date)
      ? `Tomorrow, ${cleanDayDigit} ${month}, ${localTime}`
      : `${weekday.substring(0, 3)}, ${cleanDayDigit} ${month}, ${localTime}`,
    groupText: isToday(date)
      ? 'Today'
      : isTomorrow(date)
      ? 'Tomorrow'
      : `${weekday}, ${cleanDayDigit} ${month}`,
  };

  return formattedObject;
};

export const groupByToMap = (
  objectArray: TransferAfterFormat[],
  property: keyof TransferAfterFormat
) => {
  return objectArray.reduce((map, obj) => {
    if (!map.has(obj[property])) {
      return map.set(obj[property], [obj]);
    }
    map.get(obj[property]).push(obj);
    return map;
  }, new Map());
};

export const sortByDate = (arrayOfObjects: TransferAfterFormat[]) => {
  return arrayOfObjects.sort(
    (a, b) => Date.parse(a.datetime) - Date.parse(b.datetime)
  );
};

export const completeGrouping = (transfersList: Transfer[]) => {
  const finalList = transfersList.map((transfer) => {
    const sanitizedTimedate = transfer.datetime.replace('T0', 'T');
    const dateObject = new Date(sanitizedTimedate);
    return {
      ...transfer,
      ...formatDatetime(dateObject),
      datetime: sanitizedTimedate,
    };
  });

  const sortedList = sortByDate(finalList);
  const mapOfTransfers = groupByToMap(sortedList, 'groupText');
  return Array.from(mapOfTransfers, ([key, value]) => ({
    key,
    value,
  }));
};
