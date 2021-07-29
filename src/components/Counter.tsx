import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import {
    useAppSelector,
    useAppDispatch,
} from '../store/hooks';

import {
    selectCount,
    increment,
    decrement,
    incrementByAmount,
} from '../store/slices/counterSlice';
import {useState} from "react";

const Counter = () => {
    const dispatch = useAppDispatch();
    const counter = useAppSelector(selectCount);
    const [ value, setValue ] = useState<number>(1);

    const handleIncrement = () => dispatch(increment());
    const handleDecrement = () => dispatch(decrement());
    const handleIncrementByAmount = () => dispatch(incrementByAmount(value));

    return (
        <>
            <h1>
                counter = «{counter}»
            </h1>

            <Button
                variant="contained"
                color="primary"
                onClick={handleIncrement}
            >
                Increment
            </Button>
            <br/><br/>
            <Button
                variant="contained"
                color="primary"
                onClick={handleDecrement}
            >
                Decrement
            </Button>

            <br/><br/>
            <TextField value={value} onChange={(e: any) => setValue(Number(e.target.value))}/>
            <br/><br/>
            <Button
                variant="contained"
                color="primary"
                onClick={handleIncrementByAmount}
            >
                IncrementByAmount
            </Button>
        </>
    )
}

export default Counter;