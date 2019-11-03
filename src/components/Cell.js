import React from 'react';
import PropTypes from 'prop-types';

const Cell = ( { team, line, pick, lock }) => {
    const { wins, gamesPlayed } = team;
    const projectedWins = Math.round( 82 * wins / gamesPlayed );

    const applyHighlighting = ( pick ) => {
        const projWin = { backgroundColor: 'rgba(0, 255, 0, 0.1)' };
        const projLoss = { backgroundColor: 'rgba(255, 0, 0, 0.1)' };
        const lockWin = { backgroundColor: 'rgba(0, 255, 0, 0.4)' };
        const lockLoss = { backgroundColor: 'rgba(255, 0, 0, 0.4)' };
        if( wins > line ) { return pick === 'O' ? lockWin : lockLoss }
        if( wins + ( 82 - gamesPlayed ) < line ) { return pick ==='U' ? lockWin : lockLoss }
        if( projectedWins > line ) { return pick === 'O' ? projWin : projLoss }
        if (projectedWins < line ) { return pick === 'U' ? projWin : projLoss }
    }
    
    return(
        <td style={ applyHighlighting( pick ) }>{ pick + (lock ? ' * ' : '') }</td>
    );
}

Cell.propTypes = {
    team: PropTypes.object.isRequired,
    line: PropTypes.number.isRequired,
    pick: PropTypes.string.isRequired,
    lock: PropTypes.bool.isRequired
}

export default Cell;