import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {SettingsCounter} from "./components/RootCounter/RootCounter";

function App() {
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [button, setButton] = useState(startValue)


    const onClickSet = (maxValue: number, startValue: number) => {
        setButton(startValue)
    }

    return (
        <div className='App'>
            <SettingsCounter maxValue={maxValue}
                         setMaxValue={setMaxValue}
                         startValue={startValue}
                         setStartValue={setStartValue}
                         onClickSet={onClickSet}
            />
            <Counter button={button}
                     setButton={setButton}
                     startValue={startValue}
                     setStartValue={setStartValue}
                     maxValue={maxValue}
            />
        </div>
    );
}

export default App;
