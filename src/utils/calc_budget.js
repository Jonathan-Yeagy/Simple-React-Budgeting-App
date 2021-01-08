// Function to calculate how much budget you have left
export default function calcBudget() {
    if (localStorage.getItem('price_data') !== '[]') {
        let price_data = JSON.parse(localStorage.getItem("price_data"));
        let costTotal = price_data.reduce(function (prev, cur) {
            return Number(prev) + Number(cur.cost);
        }, 0);
        let Budget = Number(localStorage.getItem('Budget'));
        let budgetTotal = Budget - costTotal;


        let displayElement = document.getElementById('budget_display');


        if (budgetTotal > 0) {
            displayElement.style.color = "green";
            displayElement.innerHTML = "$" + budgetTotal;
        } else if (budgetTotal < 0) {
            displayElement.style.color = "red";
            displayElement.innerHTML = "-$" + -budgetTotal;
            alert('You are over Budget!');
        } else {
            displayElement.innerHTML = "$" + budgetTotal;
        }
    }
}