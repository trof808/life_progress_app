type ProgressProps = {
    progress: number;
}

export const Progress = ({ progress }: ProgressProps) => {
    return <div className='absolute w-full h-[10px] bg-gray-600/30 bottom-0 left-0 rounded-b-xl'>
        <div className='absolute h-[10px] bottom-0 left-0 rounded-b-xl bg-gradient-to-r from-[#11998e] to-[#38ef7d]' style={{ width: `${progress}%` }}></div>
    </div>
}
