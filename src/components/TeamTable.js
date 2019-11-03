import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Row from './Row';
import LINES from '../data/lines';

const TeamTable = ( { teams } ) => {
    return(
        <Table responsive>
            <thead>
                <tr>
                    <th>Logo</th>
                    <th>Team</th>
                    <th>Line</th>
                    <th>Wins</th>
                    <th>Projected Wins</th>
                    <th>DOBS</th>
                </tr>
            </thead>
            <tbody>
                { teams.map( team => {
                    return(
                        <Row 
                            key={ team.id }    
                            team={ team }
                            line={ LINES[team.team] }
                        />
                    )
                })}
            </tbody>
        </Table>
    );
}

TeamTable.propTypes = {
    team: PropTypes.object.isRequired,
}


export default TeamTable;