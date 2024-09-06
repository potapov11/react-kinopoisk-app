import { API_Key } from "../constants";

export async function fetchFunc(url, options = {}) {

  const defaultHeaders = {
            "Content-Type": "application/json",
            "X-API-KEY": API_Key,
          }

  const finalOptions = {
    ...options, 
    headers: {
      ...defaultHeaders, 
      ...options.headers,
    }
  }        

  try{
    const response = await fetch(url, finalOptions);
    if(!response.ok) {
      throw new Error(`Api call failed ${response.status}`)
    }
    return {succes: true, data: await response.json()}
  } catch(error) {
    console.error('Error fetching data', error)
    return {succes: false, error: error}
  }
}
