export default function getIsLogin() {
    return !!localStorage.getItem('token');
}
