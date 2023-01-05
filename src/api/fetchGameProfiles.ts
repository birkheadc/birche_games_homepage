import { env } from "../env/env"
import { IGameProfile } from "../model/IGameProfile";



export default async function fetchGameProfiles(): Promise<IGameProfile[]> {
  const url = env.API_URL + '/api/games/profiles';
  console.log("Attempting to fetch game profiles at url: ", url);
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 8000);
  try {
    let response: Response = await fetch(
      url,
      { method: 'GET', signal: controller.signal }
    );
    clearTimeout(id);
    if (response.status != 200) {
      console.log('Failed to fetch game profiles. Received code: ', response.status);
      return [];
    }
    try {
      let data: IGameProfile[] = await response.json();
      return data;
    }
    catch {
      console.log('Failed to fetch game profiles. Received unexpected format.');
      return [];
    }
  }
  catch {
    console.log('Failed to fetch game profiles. Could not connect to server.');
    return [];
  }
}