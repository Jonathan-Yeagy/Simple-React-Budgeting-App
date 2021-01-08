export default function addPurchase() {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    let name = document.getElementById('add_item_name').value;
    let price = document.getElementById('add_item_price').value;

    let price_data = JSON.parse(localStorage.getItem("price_data"));

    price_data.push({day: day, month: month, year: year, name: name, cost: price});
    localStorage.setItem("price_data", JSON.stringify(price_data));
}