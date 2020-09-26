import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { connect, useSelector, useDispatch } from "react-redux";

import {addForm} from '../../store/actions';
import {TOGGLE} from '../../store/constants';

const HomeFormThree = ({addForm}) => {
    const ui = useSelector(state => state.ui);
    console.log(ui);
    const defaultValues = {
        'test': ui.list
    }
    const dispatch = useDispatch();
    const {
        control,
        register,
        handleSubmit,
        errors
    } = useForm({defaultValues});
    const { fields, append, remove } = useFieldArray({
        control,
        name: "test"
    });

    const onSubmit = (data) => {
        const formData = data.test.map((d,i) => { return {...d,id:i}} );
        addForm(formData);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Custom Field Array</h1>

            <ul>
                {fields.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <div>
                                <input
                                    name={`test[${index}].username`}
                                    defaultValue={item.username}
                                    ref={register({ required: "Required" })}
                                />
                                {errors.test && errors.test[index] && errors.test[index].username && errors.test[index].username.message}
                            </div>
                            <div>
                                <input
                                    name={`test[${index}].email`}
                                    defaultValue={item.email}
                                    ref={register({ required: "Required" })}
                                />
                                {errors.test && errors.test[index] && errors.test[index].email && errors.test[index].email.message}
                            </div>

                            <button type="button" onClick={() => remove(index)}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>

            <button
                type="button"
                onClick={() => {
                    append({ name: "append" });
                }}>
                append
                </button>
            <input type="submit" />
            
            <button type="button" onClick={() => dispatch({ type: TOGGLE })}>
                click
            </button>
        </form>
    );
}

export default connect(
    null,
    { addForm }
  )(HomeFormThree);