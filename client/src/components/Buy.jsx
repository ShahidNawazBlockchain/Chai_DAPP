import React, { useState } from 'react';
import { ethers } from 'ethers';
import './Buy.css'; // Import the CSS file for styling

const Buy = ({ state }) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const BuyChai = async (e) => {
        e.preventDefault();
        const { contract } = state;

        const amount = ethers.utils.parseEther("0.00001");

        try {
            setLoading(true);
            const transaction = await contract.BuyChai(name, message, { value: amount });
            await transaction.wait();
            console.log("Transaction created successfully!!!");
        } catch (error) {
            console.error("Error while creating transaction:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="buy-container">
            <h2 className="buy-title">Buy Chai</h2>
            <form onSubmit={BuyChai} className="buy-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="form-input"
                        placeholder="Enter Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        className="form-textarea"
                        placeholder="Enter Message"
                        required
                    />
                </div>
                <button type="submit" className="btn" disabled={loading}>
                    {loading ? "Processing..." : "Pay"}
                </button>
            </form>
        </div>
    );
};

export default Buy;
