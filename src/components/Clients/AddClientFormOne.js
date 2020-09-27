import React from 'react';
import { useForm } from "react-hook-form";

export default function AddClientFormOne() {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Client details</h4>
            <div>
                <div>
                    <label>clientName</label>
                    <input
                        name="clientName"
                        ref={register({ required: "Required" })}
                    />
                    {errors.clientName && errors.clientName.message}
                </div>
                <div>
                    <label>clientId</label>
                    <input
                        name="clientId"
                        ref={register({ required: "Required" })}
                    />
                    {errors.clientId && errors.clientId.message}
                </div>
                <div>
                    <label>industry</label>
                    <input
                        name="industry"
                        ref={register({ required: "Required" })}
                    />
                    {errors.industry && errors.industry.message}
                </div>
            </div>

            <h4>Client bank account details</h4>
            <div>
                <div>
                    <label>accountNumber</label>
                    <input
                        name="accountNumber"
                        ref={register({ required: "Required" })}
                    />
                    {errors.accountNumber && errors.accountNumber.message}
                </div>
                <div>
                    <label>ifscCode</label>
                    <input
                        name="ifscCode"
                        ref={register({ required: "Required" })}
                    />
                    {errors.ifscCode && errors.ifscCode.message}
                </div>
                <div>
                    <label>bankName</label>
                    <input
                        name="bankName"
                        ref={register({ required: "Required" })}
                    />
                    {errors.bankName && errors.bankName.message}
                </div>
            </div>
            <input className="btn btn-primary" type="submit" />
        </form>
    )
}