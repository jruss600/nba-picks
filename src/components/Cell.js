import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {

    applyHighlighting = ( pick, wins, line, gamesPlayed ) => {
        const projWin = { backgroundColor: 'rgba(0, 255, 0, 0.1)' };
        const projLoss = { backgroundColor: 'rgba(255, 0, 0, 0.1)' };
        const lockWin = { backgroundColor: 'rgba(0, 255, 0, 0.4)' };
        const lockLoss = { backgroundColor: 'rgba(255, 0, 0, 0.4)' };
        const projectedWins = Math.round( 82 * wins / gamesPlayed );
        if( wins > line ) { return pick === 'O' ? lockWin : lockLoss }
        if( wins + ( 82 - gamesPlayed ) < line ) { return pick ==='U' ? lockWin : lockLoss }
        if( projectedWins > line ) { return pick === 'O' ? projWin : projLoss }
        if (projectedWins < line ) { return pick === 'U' ? projWin : projLoss }
    }

    render() {
        const { team, line, pick, lock } = this.props;
        const { wins, gamesPlayed } = team;
        return(
            <td style={ this.applyHighlighting( pick, wins, line, gamesPlayed ) }>{ pick + (lock ? ' * ' : '') }</td>
        )
    }
}

Cell.propTypes = {
    team: PropTypes.object.isRequired,
    line: PropTypes.number.isRequired,
    pick: PropTypes.string.isRequired,
    lock: PropTypes.bool.isRequired
}

export default Cell;