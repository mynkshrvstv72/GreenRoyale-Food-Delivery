import axios from "axios";

const API = "http://localhost:5001/api/admin";

const getToken = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return user?.token;

};

export const addFood = async (foodData) => {

    const response = await axios.post(

        `${API}/food`,

        foodData,

        {

            headers: {

                Authorization: `Bearer ${getToken()}`

            }

        }

    );

    return response.data;

};

export const deleteFood = async (id) => {

    const response = await axios.delete(

        `${API}/food/${id}`,

        {

            headers: {

                Authorization: `Bearer ${getToken()}`

            }

        }

    );

    return response.data;

};

export const updateFood = async (id, foodData) => {

    const response = await axios.put(

        `${API}/food/${id}`,

        foodData,

        {

            headers: {

                Authorization: `Bearer ${getToken()}`

            }

        }

    );

    return response.data;

};