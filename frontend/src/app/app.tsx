import { GoalsContainer } from "./components/Goals/GoalsHorizontalList";


const MainPage = () => {
    return <div className='flex flex-col justify-center'>
        <GoalsContainer />
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
