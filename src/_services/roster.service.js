import config from "config";
import { authHeader, handleResponse } from "../_helpers";

export const rosterService = {
  getAll,
  getHtml,
};

function getAll() {
  const requestOptions = {
    method: "GET",
    // headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/rosters`, requestOptions).then(handleResponse);
}

function getHtml() {
  const requestOptions = {
    method: "GET",
    // headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/rosters/echat`, requestOptions)
    .then(function(response) {
     return response.text().then(function(text) {
        console.log(text);
        return text;
      });
    })
    .catch(function(err) {
      console.log(err);
    });
}
