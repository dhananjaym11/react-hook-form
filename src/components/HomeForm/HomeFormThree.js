import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { connect, useSelector, useDispatch } from "react-redux";

import {addForm} from '../../store/actions';
import {TOGGLE} from '../../store/constants';

const HomeFormThree = ({addForm}) => {
    const ui = useSelector(state => state.ui);
    console.log(ui);
    const dispatch = useDispatch();
    const {
        control,
        register,
        handleSubmit,
        errors
    } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "test"
    });

    const onSubmit = (data) => {
        addForm(data.test);
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
                                    name={`test[${index}].name`}
                                    ref={register({ required: "Required" })}
                                />
                                {errors.test && errors.test[index] && errors.test[index].name && errors.test[index].name.message}
                            </div>
                            <div>
                                <input
                                    name={`test[${index}].email`}
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