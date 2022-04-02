"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormatter = void 0;
const dateFormatter = (date) => {
    const parsed = new Date(date);
    const year = parsed.getFullYear();
    if (isNaN(year))
        throw new Error('Invalid Date');
    const parsedMonth = parsed.getMonth() + 1;
    const month = String(parsedMonth).length === 1 ? `0${parsedMonth}` : parsedMonth;
    const parsedDay = parsed.getDate();
    const day = String(parsedDay).length === 1 ? `0${parsedDay}` : parsedDay;
    return `${day}-${month}-${year}`;
};
exports.dateFormatter = dateFormatter;
//# sourceMappingURL=date.js.map