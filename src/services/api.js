import axios from 'axios';
import responseCodes from '~/helper/responseCodes';

export const request = ({ method, endpoint, handleError }) => {
  return axios({
    method: method || 'get',
    baseURL: `https://6dd1804f-a914-4c99-a1ed-58adca2bca74.mock.pstmn.io/${endpoint}`,
  }).catch(error => {
    if (handleError) {
      handleError({ status: true, code: error.response.status });
    }
  });
};

export const newRequest = ({
  method,
  endpoint,
  handleError,
  handleResponse,
  retries = 3,
  backoff = 300,
}) => {
  const retryCodes = [408, 500, 502, 503, 504, 522, 524];
  return axios({
    method: method || 'get',
    baseURL: `https://6dd1804f-a914-4c99-a1ed-58adca2bca74.mock.pstmn.io/${endpoint}`,
  })
    .then(response => {
      if (response && response.status === responseCodes.OK)
        // Setando TimeOut para visualização do Skeleton
        return setTimeout(() => {
          handleResponse(response.data.shared.products);
        }, 3000);

      if (retries > 0 && retryCodes.includes(response.status)) {
        setTimeout(() => {
          return newRequest(
            method,
            endpoint,
            handleError,
            handleResponse,
            retries - 1,
            backoff * 2
          );
        }, backoff);
      } else {
        throw new Error(response);
      }
    })
    .catch(error => {
      if (handleError) {
        handleError({
          status: true,
          code: JSON.stringify(error.response.status),
        });
      }
    });
};
