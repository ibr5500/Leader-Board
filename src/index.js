import './style.css';
import UserScore from './modules/usersScore.js';

const newUserScore = new UserScore();
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = form.name.value;
  const score = form.score.value;
  newUserScore.addNewScore({ user, score });
  form.name.value = '';
  form.score.value = '';
});

const scoresList = () => {
  newUserScore.playersData = [];
  newUserScore.fetchData();
};

const displayOnLoad = () => {
  newUserScore.fetchData();
  newUserScore.getData();
};

const refersh = document.getElementById('refresh');
refersh.addEventListener('click', scoresList);
window.addEventListener('load', displayOnLoad);