import config from './config'
import axios from 'axios'

export const getUsers = async (data, page, pagination=true) => {
  const query = `in:user&order=desc&page=${page}&per_page=10`;
  return await axios.get<any>(`${config.apiBaseUrl}/search/users?q=${data.value}+${query}`)
    .then(async (response) => {
      if(pagination) {
        let data = JSON.stringify(await response.data);
        if (typeof window !== "undefined") {
          localStorage.setItem("data", data)
        }
      }
      else {
        return await response;
      }
    });
}