import submit from "./components/type-order.js";
const article__products = document.querySelector(".article__products");
const products = [
    {
        image: "storage/img/product_1.png",
        name: "Mix Ice cream",
        "type-order": [
            "On Table",
            "Delivery"
        ],
        price: [
            199, 0
        ]
    },
    {
        image: "storage/img/product_4.png",
        name: "Chocolate Cup",
        "type-order": "On Table",
        price: [
            129, 2
        ]
    },
    {
        image: "storage/img/product_3.png",
        name: "Barry Ice cream",
        "type-order": [
            "On Table",
            "Delivery"
        ],
        price: 109
    },
    {
        image: "storage/img/product_2.png",
        name: "Strawberry Ice cream",
        "type-order": "Delivery",
        price: 149
    }
]

let plantilla = ""

for (let i = 0; i < products.length; i++) {
    plantilla += `
            <form action"?" method="GET" class="form__container-product">
                <img src="${products[i].image}">
                <div class="div__product">
                    <h3>${products[i].name}</h3>
                    <span>Order Type:</span>
                    <div class="div__type-order">
                        ${submit(products[i]["type-order"])}
                    </div>
                    <div class="div__product-amount">
                        <lavel>Rs. 199/-</lavel>
                        <input type="number" name="amount" value="0">
                    </div>
                </div>
            </form>
    `;
}
article__products.innerHTML = plantilla;