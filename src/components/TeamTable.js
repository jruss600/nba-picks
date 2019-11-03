import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Row from './Row';
import LINES from '../data/lines';

const TeamTable = ( { teams, players } ) => {
    return(
        <Table responsive>
            <thead>
                <tr>
                    <th>Logo</th>
                    <th>Team</th>
                    <th>Line</th>
                    <th>Wins</th>
                    <th>Projected</th>
                    <th>AD</th>
                    <th>JR</th>
                    <th>JT</th>
                    <th>MM</th>
                    <th>JF</th>
                    <th>TK</th>
                    <th>JW</th>
                    <th>ZN</th>
                </tr>
            </thead>
            <tbody>
                { teams.map( team => {
                    console.log("Players - Table:", players);
                    return(
                        <Row 
                            key={ team.id }    
                            team={ team }
                            line={ LINES[team.team] }
                            players={ players }
                        />
                    )
                })}
            </tbody>
        </Table>
    );
}

TeamTable.propTypes = {
    teams: PropTypes.array.isRequired,
    players: PropTypes.array.isRequired
}


export default TeamTable;