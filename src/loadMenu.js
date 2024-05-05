export function loadHtml(){
  const content = document.querySelector('#content');
  content.textContent = "";
  
  const appContainer = document.createElement('div');
  appContainer.classList.add('menu-container');
  
  const appTitle = document.createElement('h1');
  appTitle.classList.add('menu-title');
  appTitle.textContent = 'APPETIZERS';
  appContainer.appendChild(appTitle);

  const appetizers = [
    'Loaded Cheese Fries - $8.99',
    'Onion Rings - $6.49',
    'Mozzarella Sticks - $7.99',
    'Buffalo Chicken Wings - $9.99',
    'Jalapeno Poppers - $7.49'
  ];

  appetizers.forEach((appetizer) => {
    const appetizerElement = document.createElement('p');
    appetizerElement.classList.add('menu-item');
    appetizerElement.textContent = appetizer;
    appContainer.appendChild(appetizerElement);
  });
  content.appendChild(appContainer);

  const mealContainer = document.createElement('div');
  mealContainer.classList.add('menu-container');

  const mealTitle = document.createElement('h1');
  mealTitle.classList.add('menu-title');
  mealTitle.textContent = 'MAIN COURSE';
  mealContainer.appendChild(mealTitle);

  const meals = [
    'Classic Cheeseburger - $9.99',
    'Bacon BBQ Burger - $11.49',
    'Mushroom Swiss Burger - $10.99',
    'Veggie Burger - $8.99',
    'Double Bacon Cheeseburger - $12.99'
  ];

  meals.forEach((meal) => {
    const mealElement = document.createElement('p');
    mealElement.classList.add('menu-item');
    mealElement.textContent = meal;
    mealContainer.appendChild(mealElement);
  })
  content.appendChild(mealContainer);

  const drinkContainer = document.createElement('div');
  drinkContainer.classList.add('menu-container');

  const drinkTitle = document.createElement('h1');
  drinkTitle.classList.add('menu-title');
  drinkTitle.textContent = 'DRINKS';
  drinkContainer.appendChild(drinkTitle);

  const drinks = [
    'Coca-Cola - $2.49',
    'Lemonade - $2.99',
    'Iced Tea - $1.99',
    'Root Beer Float - $3.49',
    'Milkshake (Chocolate, Vanilla, or Strawberry) - $3.99'
  ];

  drinks.forEach((drink) => {
    const drinkElement = document.createElement('p');
    drinkElement.classList.add('menu-item');
    drinkElement.textContent = drink;
    drinkContainer.appendChild(drinkElement);
  })
  content.appendChild(drinkContainer);
}