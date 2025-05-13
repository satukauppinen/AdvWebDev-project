//Handles the admin login functionality
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginAdmin } from '../../api/authApi'; // Adjust the import path as necessary


const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
    try {
        console.log("Username being sent:", username); // Log username before API call
        const response = await loginAdmin(username, password);
        console.log("Login Response:", response); 
        
        navigate("/admin/dashboard");
    } catch (err) {
        console.error("Error:", err.message);
        setError("Login failed. Please check your credentials.");
    }
};



    return (
        <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default AdminLogin;