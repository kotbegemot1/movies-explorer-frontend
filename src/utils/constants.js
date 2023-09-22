//изменение данных profile
const SUCCES_PROFILE_MESSAGE = "Вы успешно изменили данные!";

// msg from API
const SMTHNG_WRONG_MESSAGE = "Что-от пошло не так.";


//moviesApi url
const MOVIES_API_URL = "https://api.nomoreparties.co";
const MOVIES_API_URL_MOVIES = "https://api.nomoreparties.co/beatfilm-movies";



//moviesApi url
const MAIN_API_URL = "https://api.yadiplom.nomoreparties.co";

//resize display
const DISPLAY_WIDTHS = {
  large: 1277,
  middle: 723,
};

const QUANTITY_CARDS = {
  desk: 12,
  tablet: 8,
  mobile: 5,
};

const QUANTITY_CARDS_MORE = {
  desk: 3,
  tablet: 2,
};

//not found
const NOT_FOUND_MESSAGE = "Ничего не найдено";

const REQUEST_ERROR = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

const KEYWORD = "Нужно ввести ключевое слово";

const VALIDATE_NAME_MESSAGE = "Поле Имя может содержать только кириллицу, латиницу, пробел или дефис.";
const VALIDATE_EMAIL_MESSAGE = "Недопустимый e-mail";

// Валидация поля name
const REGEX_NAME = "^[А-Яа-яЁёA-Za-z\\s\\-]+$";

module.exports = {
  DISPLAY_WIDTHS,
  QUANTITY_CARDS,
  QUANTITY_CARDS_MORE,
  MOVIES_API_URL,
  REGEX_NAME,
  SUCCES_PROFILE_MESSAGE,
  SMTHNG_WRONG_MESSAGE,
  NOT_FOUND_MESSAGE,
  REQUEST_ERROR,
  KEYWORD,
  VALIDATE_NAME_MESSAGE,
  VALIDATE_EMAIL_MESSAGE,
  MAIN_API_URL,
  MOVIES_API_URL_MOVIES
} 