import styles from './Timer.module.scss';

let Timer = (props) => {
    let milliseconds = props.milliseconds;
    const hours = Math.floor(milliseconds / 3600000);
    milliseconds %= 3600000;
    const minutes = Math.floor(milliseconds / 60000);
    milliseconds %= 60000;
    const seconds = Math.floor(milliseconds / 1000);
    milliseconds %= 1000;

    function padZero(num, size = 2) {
        let numStr = num.toString();
        while (numStr.length < size) {
            numStr = '0' + numStr;
        }
        return numStr;
    }

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds, 3)}`;
    return (
        <div className={styles.timer}>{formattedTime}</div>
    );
};

export default Timer;