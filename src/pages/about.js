const about = () => {
    const contentDiv = document.getElementById('content');

    // Clear existing content
    contentDiv.innerHTML = '';

    // Create a heading for the about section
    const heading = document.createElement('h1');
    heading.textContent = 'About Us';

    // Create a paragraph for the about content
    const paragraph = document.createElement('p');
    paragraph.textContent = "At The Culinary Haven, we believe that great food and exceptional service go hand in hand. Our restaurant is built on a foundation of culinary excellence and genuine hospitality. Our team is dedicated to creating memorable dining experiences, whether you’re here for a casual meal with friends or a special celebration. We strive to use the finest ingredients and craft each dish with care to ensure that every visit is a delight. Join us and discover why we’re more than just a place to eat— we’re a destination for food lovers.";

    const lineBreak = document.createElement('br');

    // Create a paragraph for the mission statement or values
    const missionStatement = document.createElement('p');
    missionStatement.textContent = "Our mission is to provide an extraordinary dining experience by focusing on quality, innovation, and customer satisfaction. We are committed to sustainability and supporting local farmers and artisans. Every member of our team plays a vital role in making sure your visit is enjoyable and memorable.";

    // Append heading and paragraphs to content div
    contentDiv.appendChild(heading);
    contentDiv.appendChild(paragraph);
    contentDiv.appendChild(lineBreak);
    contentDiv.appendChild(missionStatement);
}

export { about };
