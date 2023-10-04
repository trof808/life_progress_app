import { GoalsContainer } from "./components/Goals/GoalsHorizontalList";
import { StreamsList } from "./components/Streams/StreamHorizontalList";
import { ImRadioUnchecked } from 'react-icons/im';

const MainPage = () => {
    return <div className='flex flex-col justify-center'>
        <GoalsContainer />
        <StreamsList />
        <div className="flex flex-col gap-2 mx-5 mt-5">
            <div className="flex justify-between leading-tight items-baseline text-[#EBE4D1] text-sm">
                <span>Посмотреть главу 2.3 IT management start</span>
                <ImRadioUnchecked />
            </div>
        </div>
    </div>
}

export function App() {
    return (
        <div>
            <MainPage />
        </div>
    );
}

export default App;
