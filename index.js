const items = ["Candles", "Decorations", "Chocolate"];
const checkList = document.getElementById("checklist");

for(let i = 0; i < items.length; i++) {
    checkList.innerHTML += `<div class='checklist-item'>
                            <input type='checkbox' id='${items[i]} value='${items[i]}'>
                            <label for='${items[i]}' class="strikethrough">${items[i]}</label>
                            </div>`;                         
}