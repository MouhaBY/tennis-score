import React from "react";
import { useDispatch } from "react-redux";
import { playPauseAction } from "../actions";


export default function PauseButton (){
    
    const dispatch = useDispatch();

    return(
        <button onClick={()=>{dispatch(playPauseAction())}}>Pause/Reprendre</button>
    )
}