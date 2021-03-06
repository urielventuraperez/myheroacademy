import {
  GET_HEROES,
  GET_HERO,
  LOAD_DATA,
  SHOW_DETAIL,
  HERO_SELECTED,
  ADD_FAVORITE,
  TOTAL_FAVORITES,
  SEARCH_HERO
} from "../constants";

export function getHeroes() {
  return function(dispatch) {
    dispatch({ type: LOAD_DATA });
    return fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => response.json())
      .then(json => {
        return dispatch({
          type: GET_HEROES,
          payload: json
        });
      });
  };
}

export function getHero(heroID) {
  return function(dispatch) {
    return fetch(
      "https://akabab.github.io/superhero-api/api/id/" + heroID + ".json"
    )
      .then(response => response.json())
      .then(json => {
        return dispatch({ type: GET_HERO, payload: json });
      });
  };
}

export function selectedHero(payload) {
  return {
    type: HERO_SELECTED,
    payload
  };
}

export function showSidePane(payload) {
  return {
    type: SHOW_DETAIL,
    payload
  };
}

export function addToFavorite(payload) {
  return {
    type: ADD_FAVORITE,
    payload
  };
}

export function totalFavorites(payload) {
  return {
    type: TOTAL_FAVORITES,
    payload
  };
}

export function searchHero(payload) {
  return {
    type: SEARCH_HERO,
    payload
  };
}
