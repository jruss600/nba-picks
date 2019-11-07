import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import PICKS from '../data/picks';
import { Row as ReactRow, Cell as ReactCell } from 'react-sticky-table';

const Row = ( { team, line, players } ) => {
    const { logo, wins, gamesPlayed } = team;
    const projectedWins = Math.round( 82 * wins / gamesPlayed );

    return(
        <ReactRow>
            <ReactCell><img src={ logo } style={ { width: '30px', height: '30px'} } alt={ team.team }/></ReactCell>
            <ReactCell>{ team.team }</ReactCell>
            <ReactCell>{ line }</ReactCell>
            <ReactCell>{ wins }</ReactCell>
            <ReactCell> { projectedWins }</ReactCell>
            { players.map( ( player, i ) =>  {
                return(
                    <Cell 
                        key={ `${team}-${i}`}
                        team={ team }
                        line={ line }
                        pick={ PICKS[player.name][team.team] }
                        lock={ PICKS[player.name].locks.includes(team.team) }    
                    />);    
            })}
        </ReactRow>
        //     <td><img src={ logo } style={ { width: '30px', height: '30px'} } alt={ team.team }/></td>
        //     <td>{ team.team }</td>
        //     <td>{ line }</td>
        //     <td>{ wins }</td>
        //     <td> { projectedWins }</td>
        //     { players.map( ( player, i ) =>  {
        //         return(
        //             <Cell 
        //                 key={ `${team}-${i}`}
        //                 team={ team }
        //                 line={ line }
        //                 pick={ PICKS[player.name][team.team] }
        //                 lock={ PICKS[player.name].locks.includes(team.team) }    
        //             />);    
        //     })}
        // </tr>
    )
}

Row.propTypes = {
    team: PropTypes.object.isRequired,
    line: PropTypes.number.isRequired,
    players: PropTypes.array.isRequired
}

export default Row;