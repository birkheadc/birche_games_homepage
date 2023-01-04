import { env } from "../env/env";

export default async function loadGame(distName: string, callback: (status: string) => any) {
  console.log('Fetching game script...');
  const script = document.createElement("script");
  script.type = 'text/javascript';
  script.src = env.API_URL + '/static/dists/' + distName + '/index.js';
  console.log(script);
  document.body.appendChild(script);
  const status = script == null ? 'notFound' : 'good';
  console.log('SCRIPT: ', script);
  script.onload = () => callback(status);
}