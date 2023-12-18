import { useSelector } from "react-redux";
import { useState } from "react";
import './UserDetails.css'
import { VtuTable } from "../vtu-table/VtuTable";

export const UserDetails = () => {
    const user = useSelector((state) => state.auth.user);

    const [formData, setFormData] = useState({
        companyName: '',
        userName: '',
        email: user?.email,
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        aboutMe: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className={'user-container'}>
            <div className={'user-details'}>
                <h4>Edit Profile</h4>
                <form onSubmit={handleSubmit}>
                    <div className={'flex user-row user-col-details'}>
                        <div>
                            <label htmlFor="companyName">Company Name:</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange} disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="userName">User Name:</label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={'flex user-row user-col-name'}>
                        <div className={'user-col'}>
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={'user-col'}>
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={'user-row'}>
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={'flex user-row user-col-details'}>
                        <div className={'user-col'}>
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={'user-col'}>
                            <label htmlFor="country">Country:</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="postalCode">Postal Code:</label>
                            <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={'user-row'}>
                        <label htmlFor="aboutMe">About Me:</label>
                        <textarea
                            id="aboutMe"
                            name="aboutMe"
                            value={formData.aboutMe}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>

            <div className={'user-details'}>
                <VtuTable />
            </div>
        </div>
    );
}