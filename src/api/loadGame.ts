import { env } from "../env/env";

export default async function loadGame(distName: string, callback: (status: string) => any) {
  console.log('Fetching game script...', distName);
  const script = document.createElement("script");
  script.type = 'text/javascript';
  script.src = env.API_URL + '/static/dists/' + distName + '/index.js';
  document.body.appendChild(script);
  const status = script == null ? 'notFound' : 'good';
  script.onload = () => callback(status);
}