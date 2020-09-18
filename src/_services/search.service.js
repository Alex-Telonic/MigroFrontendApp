import config from 'config';
import { handleResponse } from '../_helpers';
import { headers } from './headers';

export const searchService = {
  postSearch,
  getEstimate
};

function postSearch(searchParams) {
  const requestOptions = {
    method: 'POST',
    headers: headers._getAuthHeaders(),
    body: JSON.stringify(searchParams),
  };

  return fetch(`${config.searchApiUrl}`, requestOptions).then(handleResponse);
}

function getEstimate(searchParams) {
  const requestOptions = {
    method: 'PUT',
    headers: headers._getAuthHeaders(),
    body: JSON.stringify(searchParams),
  };

  return fetch(`${config.searchApiUrl}`, requestOptions).then(handleResponse);
}
