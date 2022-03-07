import React from "react";
import { useDispatch } from "react-redux";
import { resetAction } from "../actions";

export default function ResetButton (){
    const dispatch = useDispatch();

    return (
        <button onClick={()=>dispatch(resetAction())}>Reset</button>
    )
}