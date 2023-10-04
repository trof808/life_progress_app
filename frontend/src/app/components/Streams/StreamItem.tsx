
import { format } from "date-fns";
import { showHowMuchLeftTillDeadline } from "src/app/helpers/dateHelpers/howMuchTillDeadline";
import { Progress } from "../Progress/Progress";

type StreamItemProps = {
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
export const StreamItem = ({ progress, finishDate, title }: StreamItemProps) => {
    return <div className='rounded-xl px-3 py-6 flex flex-col justify-between bg-gradient-to-br from-[#43cea2] to-[#185a9d] min-w-[150px] relative'>
        <span className='text-lg leading-tight'>{title}</span>
        <div className='text-xs mt-3 flex flex-col'>
            <span>{`до ${format(finishDate, 'dd MMMM yyyy')}`}</span>
            <span>{showHowMuchLeftTillDeadline(finishDate, ['months', 'weeks', 'days'])}</span>
        </div>
        <Progress progress={progress} />
    </div>
}

