export default function handleClick() {
    let budget = document.getElementById('budget').value;
    localStorage.setItem('Budget', budget);
}