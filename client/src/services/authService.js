import axios from "axios";

import API_URL from "./api";

const API_URL_AUTH = `${API_URL}/api/auth`;

export const register = async (userData) => {

  const response = await axios.post(`${API_URL_AUTH}/register`, userData);

  if (response.data) {

    localStorage.setItem("user", JSON.stringify(response.data));

  }

  return response.data;

};

export const login = async (userData) => {

  const response = await axios.post(`${API_URL_AUTH}/login`, userData);

  if (response.data) {

    localStorage.setItem("user", JSON.stringify(response.data));

  }

  return response.data;

};

export const logout = () => {

  localStorage.removeItem("user");

};