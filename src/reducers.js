import { playPause, pointWon, reset } from "./actions";

export const initialState = {
    playing: true,
    homeScore : 0,
    awayScore : 0
}

export function reducer (state, action){
    if (action.type === reset){
        return initialState
    }
    else if(action.type === playPause){
        return {
            ...state,
            playing : !state.playing
        }
    }
    else if (state.playing && action.type === pointWon){
        if(action.payload.player ==="home"){
            return {
                ...state,
                homeScore: state.homeScore + 1
            }
        }
        else if(action.payload.player === "away"){
            return {
                ...state,
                awayScore:state.awayScore + 1
            }
        }
    }
    else return state
}
