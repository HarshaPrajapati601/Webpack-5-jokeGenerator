import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughing from '../src/assets/smiley.jpg';

const imageLaugh = document.getElementById('smiley');
const btn =  document.getElementById('jokeBtn');

btn.addEventListener('click', generateJoke)

imageLaugh.src = laughing;

generateJoke();
