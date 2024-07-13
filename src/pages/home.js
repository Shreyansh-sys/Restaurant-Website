const home = () => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    
    const heading = document.createElement('h1');
    heading.textContent = 'Our Story';

    const p1 = document.createElement('p');
    p1.textContent = "Welcome to The Culinary Haven, where culinary passion meets heartfelt hospitality. Our journey began with a simple idea: to create a place where people can gather, enjoy delicious food, and make lasting memories. Founded in 2010, The Culinary Haven has grown from a humble eatery into a beloved dining destination, cherished by locals and visitors alike.";

    const lineBreak = document.createElement('br');

    const p2 = document.createElement('p');
    p2.textContent = "Inspired by Chef Antonio's love for Italian and Mediterranean cuisine, we set out to craft a menu that honors tradition while embracing innovation. From sourcing the freshest local ingredients to experimenting with unique flavor combinations, every dish we serve is a reflection of our commitment.";

    contentDiv.appendChild(heading);
    contentDiv.appendChild(p1);
    contentDiv.appendChild(lineBreak);
    contentDiv.appendChild(p2);
}

export {home}