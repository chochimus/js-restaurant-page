import restaurant from './img/restaurant.jpeg';

export function loadHtml() {
  const content = document.querySelector('#content');
  content.textContent = "";

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('restaurant-image-container');

  const title = document.createElement('h1');
  title.textContent = "Mock Restaurant";
  title.classList.add('title');
  imageContainer.appendChild(title);

  const description = document.createElement('p');
  description.textContent = "food and drinks";
  description.classList.add('title-subtext');
  imageContainer.appendChild(description);

  const restaurantImage = new Image();
  restaurantImage.src = restaurant;
  restaurantImage.classList.add('restaurant-image');
  imageContainer.appendChild(restaurantImage);
  content.appendChild(imageContainer);

  const statementContainer = document.createElement('div');
  statementContainer.classList.add('statement-container');
  const statement = document.createElement('p');
  statement.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Quisque luctus diam non metus placerat, id ultricies nisl dapibus. Maecenas egestas,
   enim eu pretium eleifend, nisl turpis cursus tortor, quis finibus tellus purus nec lectus.
    Proin ac sapien placerat, tincidunt ante a, laoreet sem.`
  statementContainer.appendChild(statement);

  const statementQuote = document.createElement('p');
  statementQuote.classList.add('quote-author');
  statementQuote.textContent = `-Restaurant owner`;
  
  statementContainer.appendChild(statementQuote);

  content.appendChild(statementContainer);
  
  const hoursContainter = document.createElement('div');
  hoursContainter.classList.add('hours-container');

  const hoursTitle = document.createElement('p');
  hoursTitle.classList.add('hours-title');
  hoursTitle.textContent = 'Hours:';
  hoursContainter.appendChild(hoursTitle);

  const monday = document.createElement('p');
  monday.classList.add('hours');
  monday.textContent = 'Monday: 9:00 AM - 5:00 PM';
  hoursContainter.appendChild(monday);
  const tuesday = document.createElement('p');
  tuesday.classList.add('hours');
  tuesday.textContent = 'Tuesday: 9:00 AM - 5:00 PM';
  hoursContainter.appendChild(tuesday);
  const wednesday = document.createElement('p');
  wednesday.classList.add('hours');
  wednesday.textContent = 'Wednesday: 9:00 AM - 5:00 PM';
  hoursContainter.appendChild(wednesday);
  const thursday = document.createElement('p');
  thursday.classList.add('hours');
  thursday.textContent = 'Thursday: 9:00 AM - 7:00 PM';
  hoursContainter.appendChild(thursday);
  const friday = document.createElement('p');
  friday.classList.add('hours');
  friday.textContent = 'Friday: 9:00 AM - 7:00 PM';
  hoursContainter.appendChild(friday);
  const saturday = document.createElement('p');
  saturday.classList.add('hours');
  saturday.textContent = 'Saturday: 10:00 AM - 4:00 PM';
  hoursContainter.appendChild(saturday);
  const sunday = document.createElement('p');
  sunday.classList.add('hours');
  sunday.textContent = 'Sunday: Closed';
  hoursContainter.appendChild(sunday);

  content.appendChild(hoursContainter);

  const address = document.createElement('p');
  address.classList.add('address');
  address.textContent = `123 Main Street,
  Anytown, USA 12345`;

  content.appendChild(address);

}