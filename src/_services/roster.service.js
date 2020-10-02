import config from "config";
import { authHeader, handleResponse } from "../_helpers";

export const rosterService = {
  getAll,
};

function getAll() {
  const requestOptions = {
    method: "GET",
    // headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/rosters`, requestOptions).then(handleResponse);
}
