import TaskComponent from '../components/TaskComponent';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.wrapper}>
            <h1>Main Board</h1>
            <TaskComponent />
        </div>
    );
}

export default Main;
