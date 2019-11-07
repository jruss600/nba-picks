import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import LINES from '../data/lines';
import { StickyTable, Row as ReactRow , Cell } from 'react-sticky-table';

class TeamTable extends Component {
    render(){
        const { teams, players } = this.props;
        return(
            <div>
                <div className='center' style={{width: '100%', height: '500px'}}>
                    <StickyTable>
                        <ReactRow>
                            <Cell>Logo</Cell>
                            <Cell>Teams</Cell>
                            <Cell>Line</Cell>
                            <Cell>Wins</Cell>
                            <Cell>Pace</Cell>
                            <Cell>AD</Cell>
                            <Cell>JR</Cell>
                            <Cell>JT</Cell>
                            <Cell>MM</Cell>
                            <Cell>JF</Cell>
                            <Cell>TK</Cell>
                            <Cell>JW</Cell>
                            <Cell>ZN</Cell>
                        </ReactRow>
                            { teams.map( team => {
                                return(
                                    <Row 
                                        key={ team.id }    
                                        team={ team }
                                        line={ LINES[team.team] }
                                        players={ players }
                                    />
                                )
                            })} 
                    </StickyTable>
                </div>
            </div>
        );
    }
}

TeamTable.propTypes = {
    teams: PropTypes.array.isRequired,
    players: PropTypes.array.isRequired
}

export default TeamTable;

// const TeamTable = ( { teams, players } ) => {
//     return(
//         <Table responsive>
//             <thead>
//                 <tr>
//                     <th>Logo</th>
//                     <th>Team</th>
//                     <th>Line</th>
//                     <th>Wins</th>
//                     <th>Pace</th>
//                     <th>AD</th>
//                     <th>JR</th>
//                     <th>JT</th>
//                     <th>MM</th>
//                     <th>JF</th>
//                     <th>TK</th>
//                     <th>JW</th>
//                     <th>ZN</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 { teams.map( team => {
//                     return(
//                         <Row 
//                             key={ team.id }    
//                             team={ team }
//                             line={ LINES[team.team] }
//                             players={ players }
//                         />
//                     )
//                 })}
//             </tbody>
//         </Table>
//     );
// }

// TeamTable.propTypes = {
//     teams: PropTypes.array.isRequired,
//     players: PropTypes.array.isRequired
// }


// export default TeamTable;