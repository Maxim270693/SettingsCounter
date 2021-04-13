import React, {ChangeEvent} from "react";
import {Button} from "../Button/Button";

type SettingsCounterPropsType = {
    maxValue: number
    setMaxValue: (maxValue: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    onClickSet: (maxValue: number, startValue: number) => void
}


export function SettingsCounter(props: SettingsCounterPropsType) {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber)
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
    }

    return (
        <div className='wrapper'>
            <div className='table'>
                <span className='span'>max value:</span>
                <input value={props.maxValue}
                       type='number'
                       onChange={onChangeHandler}
                       className={props.maxValue === props.startValue ? 'error' : ''}
                /><br/>
                <span className='span'>start value:</span>
                <input value={props.startValue}
                       type='number'
                       onChange={onChangeStartHandler}
                       className={props.startValue < 0 ? 'error' : ''}
                /><br/>
            </div>
            <Button maxValue={props.maxValue}
                    startValue={props.startValue}
                    onClickSet={props.onClickSet}
            />
        </div>
    )
}