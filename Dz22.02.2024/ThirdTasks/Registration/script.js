let registrate = document.getElementById('active');
let userInfoTable = document.getElementById('userInfoTable');

registrate.addEventListener('click', function(e){
  let loginValue = document.getElementById('login').value;
  let passwordValue = document.getElementById('password').value;
  let repeatPasswordValue = document.getElementById('rpassword').value;
  let nameValue = document.getElementById('name').value;

  let genderMale = document.getElementById('male').checked;
  let genderFemale = document.getElementById('female').checked;

  let designCheckbox = document.getElementById('design').checked;
  let programmingCheckbox = document.getElementById('proger').checked;
  let administrationCheckbox = document.getElementById('admin').checked;

  let positionValue = document.getElementById('dropdown').value;

  if (!loginValue || !passwordValue || !repeatPasswordValue || !nameValue) {
    alert('Пожалуйста, заполните все поля формы');
    return;
  }
  if (!genderMale && !genderFemale) {
    alert('Выберите свой пол');
    return;
  }
  if (!designCheckbox && !programmingCheckbox && !administrationCheckbox) {
    alert('Выберите хотя бы одну специализацию');
    return;
  }
  if (passwordValue.length < 3 || passwordValue.length > 10) {
    alert('Пароль должен содержать от 3 до 10 символов');
    return;
  }
  if (passwordValue !== repeatPasswordValue) {
    alert('Пароль и подтверждение пароля не совпадают');
    return;
  }

  document.getElementById('userInfoLogin').textContent = loginValue;
  document.getElementById('userInfoName').textContent = nameValue;
  document.getElementById('userInfoPosition').textContent = document.getElementById('dropdown').options[document.getElementById('dropdown').selectedIndex].text;
  document.getElementById('userInfoGender').textContent = genderMale ? "Мужской" : "Женский";

  let specializationArray = [];
  if (designCheckbox) specializationArray.push("Дизайн");
  if (programmingCheckbox) specializationArray.push("Программирование");
  if (administrationCheckbox) specializationArray.push("Администрирование");

  document.getElementById('userInfoSpecialization').textContent = specializationArray.join(', ');
  userInfoTable.style.display = 'table';
  document.getElementById('bttext').style.visibility = "visible";
});