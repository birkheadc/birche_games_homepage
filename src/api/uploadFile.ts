import { env } from "../env/env";

export default async function uploadFile(file: File) {
  const url = env.API_URL + '/api/games';
  console.log("Attempting to upload file at url: " + url);

  let formData = new FormData();
  formData.append('file', file);
  
  console.log('Form Data: ', formData);
  try {
    let response: void | Response = await fetch(
      url,
      {
        method: 'POST',
        body: formData
      }
    )
    if (response.status !== 200) {
      console.log("Failed to upload file, error code: ", response.status);
      return;
    }
  }
  catch {
    console.log("Failed to upload file, could not connect to server.");
  }
}