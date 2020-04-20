import dayjs from 'dayjs';
require('dayjs/locale/ru');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
dayjs.locale('ru');

export const formatDate = (date) => {
  return dayjs(date).format('DD MMMM');
};
