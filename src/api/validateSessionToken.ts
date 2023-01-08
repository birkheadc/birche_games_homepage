import { env } from "../env/env";

export default async function validateSessionToken(token: string): Promise<boolean> {
  const url = env.API_URL + '/api/session/validate';
  console.log("Attempting to validate session token at: ", url);
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 8000);
  try {
    let response: Response = await fetch(
      url, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Authorization': token
        }
      }
    )
    clearTimeout(id);
    if (response.status !== 200) {
      console.log('Failed to validate session token.');
      return false;
    }
  }
  catch {
    console.log('Failed to connect to server.');
    return false;
  }
  console.log('Token is still valid! Remaining logged in.')
  return true;
}