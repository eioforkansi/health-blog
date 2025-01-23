import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

export default function Update() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    dob: "",
    country: "",
    city: "",
    profession: "",
  });

  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (currentUser?.id) {
          const res = await axios.get(`/api/users/${currentUser.id}`);
          const userData = res.data;

          setInputs({
            username: userData.username || "",
            email: userData.email || "",
            dob: userData.dob || "",
            country: userData.country || "",
            city: userData.city || "",
            profession: userData.profession || "",
          });
        }
      } catch (error) {
        setErr(error.message || "An error occurred");
      }
    };

    fetchUser();
  }, [currentUser?.id]);

  console.log(inputs);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/users/update/${currentUser.id}`, inputs);
      navigate("/profile");
    } catch (error) {
      setErr(error.response);
    }
  };

  return (
    <div className="authentication">
      <h1>UPDATE</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Fullname"
          name="username"
          value={inputs.username}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="DOB format: DD-MM-YYYY"
          name="dob"
          value={inputs.dob}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Country"
          name="country"
          value={inputs.country}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="City"
          name="city"
          value={inputs.city}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Profession"
          name="profession"
          value={inputs.profession}
          onChange={handleChange}
        />
        <button onClick={handleSumbit}>Update</button>
        {err && <p>{err.data}</p>}
      </form>
    </div>
  );
}
