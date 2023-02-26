import Axios from 'axios';

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    Axios.get('https://icanhazdadjoke.com', config)
    .then(res=> {
        console.log(res.data.joke);
        document.getElementById('jokes').innerHTML = res.data.joke;
    })
    return "Crappy joke"
}

export default generateJoke;