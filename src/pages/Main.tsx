import TaskComponent from '../components/main/TaskComponent';
import styles from './Main.module.css';

function Main() {
    const handleSubmit = (value: string) => {
        console.log('제출된 값:', value);
    };

    return (
        <div className={styles.wrapper}>
            <h1>Main Board</h1>
            <div className={styles.content}>
                <TaskComponent defaultText="이름을 입력하세요" onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default Main;
