class UserScore {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

    playersData = [];

    url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/QE8nBkXmdfd1YoxrlAjT/scores/';

    getData = () => {
      const scores = document.getElementById('scores-container');
      scores.innerHTML = this.playersData.map((elem, index) => `<p class=${index % 2 !== 0 ? 'row-bg' : ''} >${elem.user}: <span>${elem.score}</span></p>`).join('');
    }

    fetchData = async () => {
      try {
        const data = await fetch(this.url);
        const response = await data.json();

        response.result.map((elem) => this.playersData.push(elem));
        return this.getData();
      } catch (error) {
        return error;
      }
    };

    addNewScore = async ({ user, score }) => {
      try {
        const record = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user, score }),
        };

        const data = await fetch(this.url, record);
        const response = await data.json();
        this.scoreData.push(response);
        return this.fetchData();
      } catch (error) {
        return error;
      }
    }
}

export default UserScore;