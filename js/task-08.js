const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {
    mail,
    password,
  };

  if (!mail || !password) {
    showAlert();
  } else {
    console.dir(formData);
    form.reset();
  }
  form.reset();
}

function showAlert() {
  // console.log('Усі поля форм повинні бути заповнені');
  alert('Усі поля форм повинні бути заповнені');
}
