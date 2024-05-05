import { loadHtml as loadHome } from "./loadHome";
import { loadHtml as loadMenu } from "./loadMenu";
import './styles.css';

loadHome();

const handleClick = (e) => {
  const buttonClass = e.target.className;
  switch (buttonClass) {
    case 'Home':
      loadHome();
      break;
    case 'Menu':
      loadMenu();
      break;
    case 'Contact':
      break;
  }
}

const header = document.querySelectorAll(`nav`);
header.forEach(button =>{
  button.addEventListener('click', handleClick);
})

console.log(alert);
