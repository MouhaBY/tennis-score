import React from "react";
import { useSelector } from "react-redux";

export default function Score() {
    const homeScore = useSelector(state => state.homeScore);
    const awayScore = useSelector(state => state.awayScore);

    
    return(
        <div>
            <p>Home : {homeScore}</p>
            <p>Away : {awayScore}</p>
        </div>
    )

}