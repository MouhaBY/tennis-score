import React from "react";
import { useDispatch } from "react-redux";
import { pointWonAction } from "../actions";

export default function PointButton ({player}) {
    
    const dispatch = useDispatch()

    return (
        <button onClick={()=>{dispatch(pointWonAction(player))}}>{player} marque</button>
    )
}