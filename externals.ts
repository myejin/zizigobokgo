import axios from "axios";

export const getTmapImage = async (longitude: number, latitude: number): Promise<string> => {
  try {
    const res = await axios.get(`https://apis.openapi.sk.com/tmap/staticMap`, {
      headers: {
        'Accept': 'application/json',
        appKey: import.meta.env.VITE_TMAP_APP_KEY,
      },
      params: {
        version: 1,
        zoom: 15,
        width: 800,
        height: 400,
        format: 'png',
        longitude,
        latitude,
        markers: encodeURI(`${longitude},${latitude}`),
      },
      responseType: 'blob',
    });
    return URL.createObjectURL(res.data);
  } catch (error) {
    return "";
  }
}
