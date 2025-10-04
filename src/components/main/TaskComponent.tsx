import styles from './TaskComponent.module.css';
import x from '../../assets/x.svg';
import { useState, useRef } from 'react';

interface DefaultInputProps {
    defaultText?: string;
    onSubmit?: (value: string) => void;
}

export function TaskComponent({ defaultText = '기본 텍스트', onSubmit }: DefaultInputProps) {
    const [value, setValue] = useState<string>(defaultText);
    const [touched, setTouched] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFocus = () => {
        if (!touched && value === defaultText) {
            setValue('');
        }
        setTouched(true);
        // 전체 선택 (모바일 호환을 위해 requestAnimationFrame 사용)
        requestAnimationFrame(() => {
            inputRef.current?.select();
        });
    };

    const handleBlur = () => {
        if (value.trim() === '') {
            setValue(defaultText);
            setTouched(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSubmit?.(value === defaultText ? '' : value);
        }
    };

    return (
        <div className={styles.taskWrapper}>
            <div className={styles.titleDiv}>
                <input
                    className={styles.input}
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
                <img src={x} alt="sideBarIcon" />
            </div>
        </div>
    );
}

export default TaskComponent;
