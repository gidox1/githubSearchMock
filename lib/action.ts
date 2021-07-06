import config from './config'
import axios from 'axios'
const query = 'in:user&order=desc&page=1&per_page=10';

export const getUsers = async (data) => {
  await axios.get<any>(`${config.apiBaseUrl}/search/users?q=${data.value}+${query}`)
    .then(async (response) => {
      let data = JSON.stringify(await response.data);
      if (typeof window !== "undefined") {
        localStorage.setItem("data", data)
      }
    });
}