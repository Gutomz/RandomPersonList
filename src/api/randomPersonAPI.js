import RestService from '../core/services/rest';

function getRandomPerson(queryParams = { results: 1 }) {
  return RestService.get("/", {
    params: queryParams,
  });
}

export default {
  getRandomPerson,
}
