function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const secondCheck = /[A-Z]+/;

  const email = input.value.trim();

  if ((!emailRegex.test(email)) || (secondCheck.test(email))) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#contacts');

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
  const emailValid = validateEmail(form.elements.emails, EMAIL_REQUIRED, EMAIL_INVALID);
  if (nameValid && emailValid) {
    form.submit();
  }
});

const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const names = document.getElementById('names');
const emails = document.getElementById('emails');
const testfield = document.getElementById('text-field');

function setForm() {
  const restoring = JSON.parse(localStorage.getItem('instance'));

  document.getElementById('first-name').value = restoring.figures[0].firstname;
  document.getElementById('last-name').value = restoring.figures[0].lastname;
  document.getElementById('names').value = restoring.figures[0].name;
  document.getElementById('emails').value = restoring.figures[0].email;
  document.getElementById('text-field').value = restoring.figures[0].text;
}

function populate() {
  const instances = {
    figures: [],
  };

  instances.figures.push({
    firstname: document.getElementById('first-name').value,
    lastname: document.getElementById('last-name').value,
    name: document.getElementById('names').value,
    email: document.getElementById('emails').value,
    text: document.getElementById('text-field').value,
  });

  localStorage.setItem('instance', JSON.stringify(instances));

  setForm();
}

if (!localStorage.getItem('instance')) {
  populate();
} else {
  setForm();
}

firstname.onchange = populate;
lastname.onchange = populate;
names.onchange = populate;
emails.onchange = populate;
testfield.onchange = populate;
