import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }; // your form submit function which will invoke after successful validation

    console.log(watch("example")); // you can watch individual input by pass the name of the input

    return (
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={loggedInUser.name} {...register("name")} />
            <input defaultValue={loggedInUser.email} {...register("email")} />
            <input {...register("address", { required: true })} placeholder="Enter Your Address"/>
            {errors.address && <span className="error">This field is required</span>}
            <input {...register("phone", { required: true })} placeholder="Enter Your Phone Number"/>
            {errors.phone && <span className="error">This field is required</span>}

            <input type="submit" />
        </form>
    );
};

export default Shipment;