const favoritesList = document.getElementById('favorites-list');

document.querySelectorAll('.add-to-favorites').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.closest('.product').querySelector('h3').innerText;
        const listItem = document.createElement('li');
        listItem.innerText = productName;
        favoritesList.appendChild(listItem);
    });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('تم إضافة المنتج إلى السلة!');
    });
});