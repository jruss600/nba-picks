import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import PICKS from '../data/picks';

const Row = ( { team, line } ) => {
    const { logo, wins, gamesPlayed } = team;
    const projectedWins = Math.round( 82 * wins / gamesPlayed );

    const applyHighlighting = ( pick ) => {
        const projWin = { backgroundColor: 'rgba(0, 255, 0, 0.1)' };
        const projLoss = { backgroundColor: 'rgba(255, 0, 0, 0.1)' };
        const lockWin = { backgroundColor: 'rgba(0, 255, 0, 0.4)' };
        const lockLoss = { backgroundColor: 'rgba(255, 0, 0, 0.4)' };
        if( wins > line ) { return pick === 'OVER' ? lockWin : lockLoss }
        if( wins + ( 82 - gamesPlayed ) < line ) { return pick ==='UNDER' ? lockWin : lockLoss }
        if( projectedWins > line ) { return pick === 'OVER' ? projWin : projLoss }
        if (projectedWins < line ) { return pick === 'UNDER' ? projWin : projLoss }
    }

    return(
        <tr>
            <td><img src={ logo } style={ { width: '30px', height: '30px'} } alt={ team.team }/></td>
            <td>{ team.team }</td>
            <td>{ line }</td>
            <td>{ wins }</td>
            <td> { projectedWins }</td>
            {/* <Cell /> */}
            <td style={ applyHighlighting( PICKS['AD'][team.team] ) }>{ PICKS['AD'][team.team]} </td>
        </tr>
    )
}

Row.propTypes = {
    team: PropTypes.object.isRequired,
    line: PropTypes.number.isRequired
}

export default Row;