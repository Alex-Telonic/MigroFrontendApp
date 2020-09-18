import { authHeader } from '@/_helpers';

export const headers = {
  _getDefaultHeaders,
  _getAuthHeaders,
};

function _getJSONHeaders() {
  return { 'Content-Type': 'application/json' };
}

function _getDefaultHeaders() {
  return _getJSONHeaders();
}

function _getAuthHeaders() {
  return { ...authHeader(), ..._getDefaultHeaders() };
}
