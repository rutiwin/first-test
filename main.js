let output = ``;
let noteIdCounter = 1;

function addProductToTable() {
    let inputName = document.getElementById("name");
    let inputPrice = document.getElementById("price");
    let inputCategory = document.getElementById("category");
    let inputLinkImage = document.getElementById("image-link");
    let productName = inputName.value;
    let productPrice = inputPrice.value;
    let productCategory = inputCategory.value;
    let productImage = inputLinkImage.value;
    if (productName === '' || productPrice === '' || productCategory === 'Select product category' || productImage === '') {
        alert('Please fill in all fields');
        return;
    }
    let tableBody = document.getElementById('table-body');
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productCategory}</td>
        <td><img src="${productImage}" alt="Product Image" style="max-width: 200px;"></td>
        <td><button type="button" class="btn btn-danger btn-sm" onclick="deleteProduct(this)">Delete</button></td>
    `;
    tableBody.appendChild(newRow);
    inputName.value = '';
    inputPrice.value = '';
    inputCategory.value = 'Select product category';
    inputLinkImage.value = '';
}

function deleteProduct(btn) {
    let row = btn.closest('tr');
    row.remove();
}