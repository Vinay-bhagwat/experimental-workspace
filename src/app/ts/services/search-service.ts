import { AxiosHandler } from "../util";

async function getSearchQueryList(search: string) {
  const response = await AxiosHandler.getRequestCall(`${search}/`);
  return response.data;
}

export const searchService = {
  getSearchQueryList
};
