import { useState } from 'react';
import styles from './CalendarComponent.module.css';

const CalendarComponent = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); //js -> 0 ~ 11 로 달 표시

    // 달력 첫주 시작 날 정하기
    const firstDayOfMonth = new Date(year, month, 1);
    const startDay = new Date(firstDayOfMonth);
    startDay.setDate(1 - firstDayOfMonth.getDay());

    // 달력 마지막 주 끝나는 날 정하기
    const lastDayOfMonth = new Date(year, month + 1, 0); // 시작일은 1이라서 0일로 정하면 그 전날으로 계산
    const lastDay = new Date(lastDayOfMonth);
    lastDay.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

    const groupDatesByWeek = (startDay: Date, endDay: Date) => {
        const weeks = [];
        let currentWeek = [];
        let currentDate = new Date(startDay);

        while (currentDate <= endDay) {
            currentWeek.push(new Date(currentDate)); // 현재 날짜를 현재 주에 추가
            // 현재 주가 7일을 모두 채웠거나 현재 날짜가 토요일인 경우
            if (currentWeek.length === 7 || currentDate.getDay() === 6) {
                weeks.push(currentWeek); // 완성된 주를 weeks 배열에 추가
                currentWeek = []; // 새로운 주를 시작하기 위해 currentWeek을 재초기화
            }
            currentDate.setDate(currentDate.getDate() + 1); // 현재 날짜를 다음 날로 변경
        }

        // 마지막 주 처리 (만약 남아있다면)
        if (currentWeek.length > 0) {
            weeks.push(currentWeek); // 남아 있는 날짜가 있다면 마지막 주로 weeks에 추가
        }

        return weeks; // 주 단위로 그룹화된 날짜 배열들을 반환
    };

    const handlePrevMonth = () => {
        // 이전 달로 이동
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        // 다음 달로 이동
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <div className={styles.calendar}>
            {/* 헤더 */}
            <div className={styles.header}>
                <button onClick={handlePrevMonth}>&lt;</button>
                <span>{`${year}년 ${month + 1}월`}</span>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>

            {/* 달력 전체 영역 (요일 + 날짜들) */}
            <div className={styles.body}>
                {/* 요일 헤더 */}
                <div className={styles.weekdays}>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className={styles.weekday}>
                            {day}
                        </div>
                    ))}
                </div>

                {/* 날짜 주 단위 */}
                <div className={styles.weeks}>
                    {groupDatesByWeek(startDay, lastDay).map((week, weekIndex) => (
                        <div key={weekIndex} className={styles.week}>
                            {week.map((date, dateIndex) => (
                                <div
                                    key={dateIndex}
                                    className={`${styles.day} ${date.getMonth() !== month ? styles.outside : ''}`}
                                >
                                    {date.getDate()}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalendarComponent;
