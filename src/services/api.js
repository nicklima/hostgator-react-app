import axios from 'axios';

export const request = ({ method, endpoint }) => {
  return axios({
    method: method || 'get',
    baseURL: `https://6dd1804f-a914-4c99-a1ed-58adca2bca74.mock.pstmn.io/${endpoint}`,
  });
};
