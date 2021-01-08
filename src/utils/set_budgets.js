// Function to set defaults so the App doesn't crash
export default function setBudgets() {
    if (localStorage.getItem('Budget') == null) {
        localStorage.setItem('Budget', 0);
    }
    if (localStorage.getItem('price_data') == null) {
        localStorage.setItem('price_data', '[]');
    }
}


    