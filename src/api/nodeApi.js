import 'whatwg-fetch';
import getBaseUrl from './baseUrl';


const baseUrl = getBaseUrl();

export function getNodes() {
  return get('nodes');
}

export function deleteNode(id) {
  return del(`nodes/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
    return fetch(request).then(onSuccess, onError);
  }

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
