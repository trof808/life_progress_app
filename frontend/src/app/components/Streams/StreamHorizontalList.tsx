
import { StreamItem } from "./StreamItem"

export const StreamsList = () => {
    return <div className='m-3'>
        <div className='text-2xl text-[#EADBC8] mb-2'>Streams</div>
        <div className='flex gap-2 overflow-x-scroll'>
            <StreamItem progress={20} title="Перейти на 17 грейд" finishDate={new Date('2023-12-20')} />
            <StreamItem progress={0} title="Поставить Варю на лыжи" finishDate={new Date('2024-02-01')} />
            <StreamItem progress={46} title="Goal 3" finishDate={new Date('2023-11-05')} />
            <StreamItem progress={31} title="Goal 4" finishDate={new Date('2023-10-10')} />
        </div>
    </div>
}
