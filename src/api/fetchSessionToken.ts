import { env } from "../env/env";

export default async function fetchSessionToken(password: string): Promise<any> {
  // Todo: Use return value to change error message
  // ie: return 'SUCCESS:{token}' for success,
  // 'ERROR:{error message}' for error
  // Then parse out 'SUCCESS:' to get token later
  // or parse out 'ERROR:' to get error message
  const url = env.API_URL + '/api/session';
  console.log("Attempting to fetch session token from: ", url);
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 8000);
  try {
    let response: Response = await fetch(
      url, {
        method: 'GET',
        signal: controller.signal,
        headers: {
          'Authorization': password
        }
      }
    )
    clearTimeout(id);
    if (response.status !== 200) {
      console.log('Failed to fetch session token.');
      return '';
    }
    try {
      let token: { token: string } = await response.json();
      return token.token;
    }
    catch {
      console.log('Failed to fetch token, unexpected format.');
      return '';
    }
  }
  catch {
    console.log('Failed to connect to server.');
    return '';
  }
}