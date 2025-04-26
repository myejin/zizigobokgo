import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, type GetCommandOutput } from "@aws-sdk/lib-dynamodb";
import axios from "axios";

export const getTmapImage = async (longitude: number, latitude: number): Promise<string> => {
  try {
    return "";
    const res = await axios.get(`https://apis.openapi.sk.com/tmap/staticMap`, {
      headers: {
        'Accept': 'application/json',
        appKey: import.meta.env.VITE_TMAP_APP_KEY,
      },
      params: {
        version: 1,
        zoom: 15,
        width: 800,
        height: 270,
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


export const queryDynamoDocument = async (userKey: string): Promise<GetCommandOutput | null> => {
  try {
    const client = new DynamoDBClient({
      region: import.meta.env.VITE_AWS_REGION,
      credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
      },
    });
    const docClient = DynamoDBDocumentClient.from(client);
    const params = {
      TableName: import.meta.env.VITE_DYNAMO_TABLE_NAME,
      Key: {
        user_key: userKey,
      },
    };
    return docClient.send(new GetCommand(params));
  } catch (error) {
    return null;
  }
}
