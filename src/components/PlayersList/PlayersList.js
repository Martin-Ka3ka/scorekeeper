import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';

const PlayersList = (props) => (
    <ol className="PlayersList">
        {props.players.map((player, i) => (
            <Player
                key={i}
                id={i}
                name={player.name}
                score={player.score}
                onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
                onPlayerRemove={() => props.onPlayerRemove(i)}
            />)
        )}
    </ol>
);

export default PlayersList;