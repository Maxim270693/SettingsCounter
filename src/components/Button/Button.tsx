import React from "react";

type ButtonPropsType = {
    maxValue: number
    startValue: number
    onClickSet: (maxValue: number, startValue: number) => void
}

export function Button(props: ButtonPropsType) {

    const onClickHandler = () => {props.onClickSet(props.maxValue, props.startValue)}

    return (
        <div className='button'>
            <button className='btn'
                    disabled={props.maxValue === props.startValue || props.startValue < 0 || props.maxValue < props.startValue}
                    onClick={onClickHandler}
            >set</button>
        </div>
    )
}