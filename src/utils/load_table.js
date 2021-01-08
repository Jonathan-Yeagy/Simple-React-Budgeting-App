// Function to load data in the table
export default function loadTable() {
    if (localStorage.getItem("price_data") === '[]') {
        document.getElementById("tableView").innerHTML = "<p class='fff'>Add Some Things You Bought</p>";
    } else {
        let price_data = JSON.parse(localStorage.getItem("price_data"));
        let price_chart = document.getElementById("price_chart");
        for (var i = 0; i < price_data.length; i++) {
            price_chart.innerHTML += "<tr><td>" + price_data[i].month + "/" + price_data[i].day + "</td><td>" + price_data[i].name + "</td><td>$" + price_data[i].cost + "</td></tr>";
        }
    }
}