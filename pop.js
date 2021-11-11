const data = [
  {
    id: 1,
    name: 'Multi - Post stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: 'images/SnapshootPortfolio.png',
    language: ['html', 'Ruby on rails', 'css'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 2,
    name: 'Multi - Post stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: 'images/SnapshootPortfolio1.png',
    language: ['html', 'Ruby on rails', 'css', 'Github'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const contain = document.createElement('div');
const div = document.createElement('div');
const div1 = document.createElement('div');
const h2 = document.createElement('h2');
const headButton = document.createElement('button');
const headImg = document.createElement('img');
const mainImg = document.createElement('img');

const buttonDiv = document.createElement('div');
const button = document.createElement('button');
const buttonText = document.createElement('p');
const buttonImg1 = document.createElement('img');
const button1 = document.createElement('button');
const buttonText1 = document.createElement('p');
const buttonImg2 = document.createElement('img');

const body = document.querySelector('body');
const next = document.querySelector('.grid-wrap');

contain.append(div);
div.append(div1);
div1.append(h2);
div1.append(headButton);
headButton.append(headImg);
div.append(mainImg);

contain.setAttribute('class', 'contain');
div.setAttribute('class', 'popup');
div1.setAttribute('class', 'head-popup');
h2.innerHTML = 'Multi - Post stories';
headImg.setAttribute('src', 'images/Icon - Cancel.svg');
headImg.setAttribute('class', 'headImg');
headButton.setAttribute('class', 'headButton');
mainImg.setAttribute('class', 'pop-img');
button.setAttribute('class', 'pop-button');
button1.setAttribute('class', 'pop-button1');
buttonDiv.setAttribute('class', 'divbutton');
buttonImg1.setAttribute('src', 'images/Icon - Export.svg');
buttonImg2.setAttribute('src', 'images/Icon-Medium.png');
buttonText.innerText = 'See live';
buttonText1.innerText = 'See Source';

const mainText = document.createElement('p');
const langSec = document.createElement('ul');

div.append(mainText);
div.append(langSec);
let count = 0;

const buildCard = (build) => {
  mainText.innerText = build.description;
  mainText.setAttribute('class', 'maintext');
  mainImg.setAttribute('src', build.image);
  button.setAttribute('onclick', build.liveLink);
  button1.setAttribute('onclick', build.sourceLink);

  for (let x = 0; x < build.language.length; x += 1) {
    if (count === 0) {
      const lang = document.createElement('li');
      langSec.append(lang);
      lang.innerText = build.language[x];
    }
  }

  div.append(buttonDiv);
  buttonDiv.append(button);
  button.append(buttonText);
  button.append(buttonImg1);
  buttonDiv.append(button1);
  button1.append(buttonText1);
  button1.append(buttonImg2);
  count += 1;
};

const mobileButton = document.querySelector('.button1');
const mobileButton2 = document.querySelector('.button2');
const mobileButton3 = document.querySelector('.button3');
const mobileButton4 = document.querySelector('.button4');

const test1 = document.querySelector('.test');
const style = getComputedStyle(test1);

const test2 = document.querySelector('.wrapiii');

function popWindow() {
  contain.style.display = 'block';
  next.style.display = 'none';
  if (style.display === 'none') {
    buildCard(data[0]);
  } else {
    buildCard(data[1]);
  }

  body.append(contain);
}

function removePop() {
  next.style.display = 'grid';
  contain.parentNode.removeChild(contain);
  test2.scrollIntoView();
}

mobileButton.addEventListener('click', popWindow);
mobileButton2.addEventListener('click', popWindow);
mobileButton3.addEventListener('click', popWindow);
mobileButton4.addEventListener('click', popWindow);

headButton.addEventListener('click', removePop);