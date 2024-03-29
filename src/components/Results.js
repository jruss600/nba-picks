import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LINES from '../data/lines';
import PICKS from '../data/picks';
import Table from 'react-bootstrap/Table';
import Card  from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

class Results extends Component {

    calcPoints = ( team, pick ) => {
        const diff = Math.round( 82 * team.wins / team.gamesPlayed ) - LINES[team.team];
        if (diff === 0 ) { return 0 }
        return ((diff > 0 && pick === 'O') || (diff < 0 && pick === 'U')) ? Math.abs(diff) : (-1 * Math.abs(diff));
    }

    render() {
        const { teams, players } = this.props;
        players.map( player => {
            player.score = 0;
            teams.map( team => {
                const factor = (PICKS[player.name].locks.includes(team.team) ? 2 : 1); 
                return player.score += ( factor * this.calcPoints( team, PICKS[player.name][team.team]));
            });
            return players;
        });
        let sortedResults = [...players].sort(( a, b ) => (a.score > b.score) ? -1 : (a.score === b.score) ? 0 : 1 );

        return(
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <h4>Current Standings</h4>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedResults.map( (player, i) => {
                                        return(
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{ player.name }</td>
                                                <td>{ player.score }</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

Results.propTypes = {
    teams: PropTypes.array.isRequired,
    players: PropTypes.array.isRequired
}

export default Results;