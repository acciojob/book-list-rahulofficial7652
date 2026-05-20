//your JS code here. If required.
// DOM Elements ko select karna
const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

// 1. Book Add karne ka logic
bookForm.addEventListener('submit', (e) => {
    // Page reload hone se rokne ke liye
    e.preventDefault();

    // Inputs ki current values nikalna
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Ek naya table row (tr) element banana
    const row = document.createElement('tr');

    // Row ke andar data aur delete button insert karna (class='delete' ke saath)
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Row ko table body (#book-list) mein jodhna
    bookList.appendChild(row);

    // Form fields ko wapas khali karna
    bookForm.reset();
});

// 2. Row Delete karne ka logic (Event Delegation ka use karke)
bookList.addEventListener('click', (e) => {
    // Agar click kiye gaye element par 'delete' class hai
    if (e.target.classList.contains('delete')) {
        // Button ke parent td ke parent tr (poori row) ko uda do
        e.target.parentElement.parentElement.remove();
    }
});