function validation(name, value) {

  let errors = {};
  if (name === 'email') {
    if (!value) {
      errors = ({ [name]: 'Введите ваш email' });
    } else if (!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value)) {
      errors = ({ [name]: 'Введенный email не валиден' });
    }
  }
  if (name === 'password') {
    if (!value) {
      errors = ({ [name]: 'Введите ваш пароль' });
    }
  }
  if (name === 'name') {
    if (!value) {
      errors = ({ [name]: 'Введите ваше имя' })
    } else if (value.length < 2) {
      errors = ({ [name]: 'Длина должна быть более 2 символов' });
    }
  }

  return errors;
}

export default validation;
