import axios from "axios";

import API_URL from "./api";

const API = `${API_URL}/api/favourites`;

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.token;
};

export const addFavourite = async (foodId) => {

  const response = await axios.post(

    API,

    { foodId },

    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }

  );

  return response.data;

};

export const removeFavourite = async (foodId) => {

  const response = await axios.delete(

    `${API}/${foodId}`,

    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }

  );

  return response.data;

};

export const getFavourites = async () => {

  const response = await axios.get(

    API,

    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }

  );

  return response.data;

};