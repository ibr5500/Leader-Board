import './style.css';
import UserScore from './modules/usersScore';

const newUserScore = new UserScore();
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = form.name.value;
    const userScore = form.score.value;
    newUserScore.addNewScore({ userName, userScore });
    form.name.value = '';
    form.score.value = '';
});

const refersh = document.getElementById('refresh');
refersh.addEventListener('click', newUserScore.fetchData);
window.addEventListener('DOMContentLoaded', newUserScore.getData);