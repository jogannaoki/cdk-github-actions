import { message } from "../model/message";
 
export const handler = async (event: any = {}): Promise<any> => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: message(event.path)
  };
}