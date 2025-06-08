import CalendarComponent from '../components/CalendarComponent';
import styles from './Calendar.module.css';

function Calendar() {
    return (
        <div className={styles.wrapper}>
            <CalendarComponent />
        </div>
    );
}

export default Calendar;
