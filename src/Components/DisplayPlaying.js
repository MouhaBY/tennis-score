import React from "react";
import { useSelector } from "react-redux";

export default function DisplayPlaying () {

    const gameIsPlaying = useSelector(state => state.playing)
    
    return (
            gameIsPlaying ? <p>Jeu en cours</p> : <p>Jeu en pause</p>
    )
}
