// Function to set default input value on budget page for budget
export default function setInput() {
    document.getElementById("budget").defaultValue = localStorage.getItem('Budget');
}