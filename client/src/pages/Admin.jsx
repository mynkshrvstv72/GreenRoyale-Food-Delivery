import { useEffect, useState } from "react";
import axios from "axios";
import { addFood, deleteFood, updateFood } from "../services/adminService";
import "./Admin.css";
import { toast } from "react-toastify";

import API_URL from "../services/api";

function Admin() {

    const [editingId, setEditingId] = useState(null);

    const [foods, setFoods] = useState([]);

    const [loading, setLoading] = useState(true);

    const loadFoods = async () => {

    try{

        const res = await axios.get(`${API_URL}/api/foods`);

        setFoods(res.data);

    }

    finally{

        setLoading(false);

    }

};

    const [food, setFood] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: ""
});

    useEffect(() => {

        loadFoods();

    }, []);

    const handleChange = (e) => {

        setFood({

            ...food,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        if (editingId) {

            await updateFood(editingId, food);

            toast.success("Food Updated Successfully");

        } else {

            await addFood(food);

            toast.success("Food Added Successfully");

        }

        setFood({
            name: "",
            price: "",
            category: "",
            image: "",
            description: ""
        });

        setEditingId(null);

        loadFoods();

    } catch (error) {

        toast.error(error.response?.data?.message || "Something went wrong!");

    }

};

    const handleDelete = async (id) => {

        await deleteFood(id);

        loadFoods();

    };

    const handleEdit = (item) => {

    setFood({

        name: item.name,

        price: item.price,

        category: item.category,

        image: item.image,

        description: item.description

    });

    setEditingId(item._id);

};

if (loading) {

    return <div className="loader"></div>;

}

    return (

        <div className="page admin">

            <h1>Admin Dashboard</h1>

            <div className="dashboard-cards">

  <div className="card">

    <h2>{foods.length}</h2>

    <p>Total Foods</p>

  </div>

  <div className="card">

    <h2>₹0</h2>

    <p>Total Revenue</p>

  </div>

</div>

            <form className="admin-form" onSubmit={handleSubmit}>

                <input
                    name="name"
                    placeholder="Food Name"
                    value={food.name}
                    onChange={handleChange}
                />

                <input
                    name="price"
                    placeholder="Price"
                    value={food.price}
                    onChange={handleChange}
                />

                <input
                    name="category"
                    placeholder="Category"
                    value={food.category}
                    onChange={handleChange}
                />

                <input
                    name="image"
                    placeholder="Image URL"
                    value={food.image}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={food.description}
                    onChange={handleChange}
                />

                <button>
                    {editingId ? "Update Food" : "Add Food"}
                </button>

            </form>

            <h2>Food List</h2>

            <div className="food-list">

                {

                    foods.map((item) => (

                        <div
                            className="food-item"
                            key={item._id}
                        >

                            <img
                                src={item.image}
                                alt=""
                            />

                            <h3>{item.name}</h3>

                            <p>₹{item.price}</p>

                            <button
                                 onClick={() => handleEdit(item)}>
                                    Edit
                            </button>

                            <button
                                onClick={() => handleDelete(item._id)}
                            >

                                Delete

                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default Admin;