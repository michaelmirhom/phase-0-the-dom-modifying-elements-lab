const element = document.getElementById("main");
element.remove();
const h1 = document.createElement('h1');
h1.textContent = 'newHeader';
document.body.appendChild(h1);
h1.id="victory";
h1.textContent="YOUR-NAME is the champion";
const victory = h1.textContent.replace('YOUR-NAME','Mirhom');
const newHeader = document.querySelector('#victory');

