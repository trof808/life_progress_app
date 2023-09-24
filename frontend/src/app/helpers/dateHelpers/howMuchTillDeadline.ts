import { formatDuration, intervalToDuration } from 'date-fns';

/**
 * Если больше месяца - кол-во месяцев и недель
 * Если меньше месяца - кол-во недель и дней
 * */
export const showHowMuchLeftTillDeadline = (deadLineDate: Date, durationOpts: ('years' | 'months' | 'weeks' | 'days' | 'hours')[] = []) => {
    const duration = intervalToDuration({
        start: new Date(),
        end: deadLineDate
    });

    return formatDuration(duration, {
        format: durationOpts,
    })
}
