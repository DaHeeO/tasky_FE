import ReactDOM from 'react-dom';

interface ModalPortalProps {
    children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
    const el = document.getElementById('modal');
    return el ? ReactDOM.createPortal(children, el) : null;
};

export default ModalPortal;
