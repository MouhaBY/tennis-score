export const playPause = "playPause";
export const pointWon = "pointWon";
export const reset = "reset";

export const playPauseAction = () => (
    {
        type : playPause
    }
)

export const pointWonAction = (player) => (
    {
        type : pointWon,
        payload : {
            player : player
        }
    }
)

export const resetAction = () => (
    {
        type : reset
    }
)