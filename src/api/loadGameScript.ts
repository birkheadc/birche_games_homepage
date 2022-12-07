import api from ".";

export default async function loadGameScript(gameName: string, oncomplete: ((this: GlobalEventHandlers, ev: Event) => any)) {
  console.log('Fetching game...');
  const script = document.createElement("script");
  script.type = 'text/javascript';
  script.src = await api.fetchGameScriptURL(gameName);
  console.log(script);
  document.body.appendChild(script);
  script.onload = oncomplete;
}