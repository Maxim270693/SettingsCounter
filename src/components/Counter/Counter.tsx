import React from "react";

type CounterPropsType = {
    button: number
    setButton: (button: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
}

export function Counter(props: CounterPropsType) {

    const onClickHandler = () => {props.setButton(props.button + 1)}
    const startValueHandler = () => {props.setButton(props.startValue)}

    const propsValue = props.startValue < 0 || props.startValue === props.maxValue || props.startValue > props.maxValue   // Норм или нет

    return (
        <div className='wrapper'>
            { propsValue  // Норм или нет
                ? <div className='spanCounter'>Incorrect value!</div>
                : <div className='table'>
                    <div className={props.button === props.maxValue ? 'itemColor' : ''}>
                        {props.button}
                    </div>
                </div>
            }


            <div className='item_button'>
                <button onClick={onClickHandler}
                        disabled={props.button === props.maxValue || propsValue }  // Норм или нет
                >inc</button>
                <button onClick={startValueHandler}
                        disabled={props.button !== props.maxValue}
                >reset</button>
            </div>
        </div>
    )
}


