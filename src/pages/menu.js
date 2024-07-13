const menu = () => {
    const contentDiv = document.getElementById('content');

    // Clear existing content
    contentDiv.innerHTML = '';

    // Create a heading for the menu
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    // Create menu items
    const menuItems = [
        { name: 'Spaghetti Carbonara', description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.', price: '$12.99' },
        { name: 'Margherita Pizza', description: 'Simple and delicious pizza with fresh tomatoes, mozzarella, and basil.', price: '$10.99' },
        { name: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.', price: '$8.99' },
        { name: 'Tiramisu', description: 'A traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.', price: '$6.99' }    ];

    // Create a container for menu items
    const menuList = document.createElement('ul');
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('menuItem')
        
        const itemName = document.createElement('h2');
        itemName.textContent = item.name;
        
        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        
        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        itemPrice.style.fontWeight = 'bold';

        // Append item details to the menu item
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        // Append menu item to the menu list
        menuList.appendChild(menuItem);
    });

    // Append heading and menu list to content div
    contentDiv.appendChild(heading);
    contentDiv.appendChild(menuList);
}

export { menu };
