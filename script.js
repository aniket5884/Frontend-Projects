let products = [];
let editIndex = -1;

const loadProducts = () => {
    products = [
        {id:1, name:"Laptop", price:90000},
        {id:2, name:"Mobile", price:60000},
        {id:3, name:"Smart Watch", price:4500}
    ];

    displayProducts();
};

const displayProducts = () => {

    const tableBody = document.getElementById("productTable");

    tableBody.innerHTML = "";

    products.forEach((product,index) => {
        tableBody.innerHTML += `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <button onclick="updateProduct(${index})" style="background-color:#f39c12;color:white;border:none;padding:5px 10px;border-radius:5px;cursor:pointer;">Update</button>
                <button onclick="deleteProduct(${index})" style="background-color:#e74c3c;color:white;border:none;padding:5px 10px;border-radius:5px;cursor:pointer;">Delete</button>
            </td>
        </tr>
        `;
    });

};

const addProduct = () => {

    const id = document.getElementById("productId").value;
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;

    const newProduct = {
        id: id,
        name: name,
        price: price
    };

    if(editIndex === -1){
        products.push(newProduct);
    } 
    else{
        products[editIndex] = newProduct;
        editIndex = -1;
    }

    displayProducts();

    document.getElementById("productId").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
};

const deleteProduct = (index) => {

    products.splice(index,1);

    displayProducts();
};

const updateProduct = (index) => {

    const product = products[index];

    document.getElementById("productId").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("productPrice").value = product.price;

    editIndex = index;
};