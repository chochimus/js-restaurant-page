export function loadHtml(){
  const content = document.querySelector('#content');
  content.textContent = "";

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-container');

  const contactHeader = document.createElement('h1');
  contactHeader.classList.add('contact-title');
  contactHeader.textContent = "Contact Us!";
  contactInfo.appendChild(contactHeader);

  const contactInformation = [
    'Email: someemail@example.com',
    'Phone: +1(850) 123-4567'
  ]
  contactInformation.forEach((info) => {
    const contact = document.createElement('p');
    contact.classList.add('contact');
    contact.textContent = info;
    contactInfo.appendChild(contact);
  })
  content.appendChild(contactInfo);
}