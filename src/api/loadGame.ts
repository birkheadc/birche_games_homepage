import { env } from "../env/env";

export default async function loadGame(distName: string, callback: ((this: GlobalEventHandlers, ev: Event) => any)) {
  console.log('Fetching game...');
  const script = document.createElement("script");
  script.type = 'text/javascript';
  script.src = env.API_URL + '/static/dists/' + distName + '/index.js';
  console.log(script);
  document.body.appendChild(script);
  script.onload = callback;
}