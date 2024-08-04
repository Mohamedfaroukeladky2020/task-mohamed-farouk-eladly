// Function to show/hide the form for adding a new item
function addNewItem() {
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
}

// Function to add a new item to the table
function addItem() {
    // Get form values
    const nameAr = document.getElementById('name-ar').value;
    const nameEn = document.getElementById('name-en').value;
    const descAr = document.getElementById('desc-ar').value;
    const descEn = document.getElementById('desc-en').value;
    const imageUrl = document.getElementById('image-url').value;

    // Create a new row and cells
    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    
    // Action buttons (edit/delete)
    const actionCell = newRow.insertCell(0);
    actionCell.innerHTML = '<span class="icon" onclick="editItem(this)">✏️</span> <span class="icon" onclick="deleteItem(this)">❌</span>';

    // Description (English)
    const descEnCell = newRow.insertCell(1);
    descEnCell.innerText = descEn;

    // Description (Arabic)
    const descArCell = newRow.insertCell(2);
    descArCell.innerText = descAr;

    // Name (English)
    const nameEnCell = newRow.insertCell(3);
    nameEnCell.innerText = nameEn;

    // Name (Arabic)
    const nameArCell = newRow.insertCell(4);
    nameArCell.innerText = nameAr;

    // Image
    const imageCell = newRow.insertCell(5);
    imageCell.innerHTML = `<img src="${imageUrl}" alt="${nameAr}" style="width:50px; height:30px;">`;

    // Hide the form
    addNewItem();
}

// Function to delete a row
function deleteItem(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Placeholder functions for additional features
function editItem(btn) {
    alert('Edit functionality not implemented.');
}

function changeRecordsPerPage() {
    alert('Change records per page functionality not implemented.');
}