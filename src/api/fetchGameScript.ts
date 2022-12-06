export default async function fetchGameScript(gameName: string, oncomplete: ((this: GlobalEventHandlers, ev: Event) => any)) {
  console.log('Fetching game...');
  const script = document.createElement("script");
  script.type = 'text/javascript';
  // script.src = 'http://localhost:3001/dejavu-game.js';
  script.src = 'https://birchegames.com/games/dejavu/dejavu-game.js';
  console.log(script);
  // script.src = 'https://birchegames.com/games/' + gameName + '/' + gameName + '-game.js';
  document.body.appendChild(script);
  script.onload = oncomplete;
}