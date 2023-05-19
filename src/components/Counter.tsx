import {useState} from "react";
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <div className={classes.number}>{count}</div>
            <div className={classes.btn} onClick={() => increment()}> Кликни</div>
        </div>
    );
};

export default Counter;