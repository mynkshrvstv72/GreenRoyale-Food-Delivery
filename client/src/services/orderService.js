import axios from "axios";

import API_URL from "./api";

const API = `${API_URL}/api/orders`;

const getToken = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return user?.token;

};

export const placeOrder = async (orderData) => {
  const response = await axios.post(API, orderData, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return response.data;
};

export const getAllOrders = async () => {

    const response = await axios.get(

        `${API}/all`,

        {

            headers: {

                Authorization: `Bearer ${getToken()}`

            }

        }

    );

    return response.data;

};

export const updateOrderStatus = async (id, status) => {

    const response = await axios.put(

        `${API}/${id}`,

        {

            status

        },

        {

            headers: {

                Authorization: `Bearer ${getToken()}`

            }

        }

    );

    return response.data;

};

export const getOrders = async () => {

  const response = await axios.get(

    `${API}/myorders`,

    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }

  );

  return response.data;

};