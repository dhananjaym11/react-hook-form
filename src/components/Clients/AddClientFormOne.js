import React from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';

import { ADD_CLIENT_FORM_ONE } from '../../store/constants';

function AddClientFormOne(props) {
    const addClient = useSelector(state => state.addClient);
    const defaultValues = addClient.formOne;
    const { handleSubmit, register, errors } = useForm({ defaultValues });
    const dispatch = useDispatch();
    const onSubmit = form => {
        console.log(form);
        dispatch({
            type: ADD_CLIENT_FORM_ONE,
            payload: form
        })
        props.history.push('/client/add/form-two');
    }

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
            <input className="btn btn-primary" type="submit" value="Next" />
        </form>
    )
}

export default withRouter(AddClientFormOne)