export default async function fetchGameScript(gameName: string, oncomplete: ((this: GlobalEventHandlers, ev: Event) => any)) {
  const fileName = gameName + '-game.js';
  const script = document.createElement("script");
  script.type = 'text/javascript';
  script.src = 'http://localhost:3001/' + fileName;
  document.body.appendChild(script);
  script.onload = oncomplete;
}