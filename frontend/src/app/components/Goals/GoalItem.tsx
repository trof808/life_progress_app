import { format } from "date-fns";
import { showHowMuchLeftTillDeadline } from "src/app/helpers/dateHelpers/howMuchTillDeadline";

type GoalItemProps = {
    progress: number;
    finishDate: Date;
    title: string;
}

/**
 * Название цели
 * Дата завершения
 * Сколько осталось дней
 * Прогресс по стримам
 * */
export const GoalsItem = ({ progress, finishDate, title }: GoalItemProps) => {
    return <div className='rounded-xl px-3 py-6 flex flex-col justify-between bg-gradient-to-br from-[#ff9966] to-[#ff5e62] min-w-[150px] relative'>
        <span className='text-lg'>{title}</span>
        <div className='text-xs mt-3 flex flex-col'>
            <span>{`до ${format(finishDate, 'dd MMMM yyyy')}`}</span>
            <span>{showHowMuchLeftTillDeadline(finishDate, ['months', 'weeks', 'days'])}</span>
        </div>
        <div className='absolute w-full h-[10px] bg-gray-600/30 bottom-0 left-0 rounded-b-xl'>
            <div className='absolute h-[10px] bottom-0 left-0 rounded-b-xl bg-gradient-to-r from-[#11998e] to-[#38ef7d]' style={{ width: `${progress}%` }}></div>
        </div>
    </div>
}

