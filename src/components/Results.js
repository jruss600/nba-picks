import React from 'react';
import LINES from '../data/lines';
import PICKS from '../data/picks';
import Table from 'react-bootstrap/Table';
import Card  from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const Results = ( { teams, players }) => {

    const calcPoints = ( team, pick ) => {
        const diff = Math.round( 82 * team.wins / team.gamesPlayed ) - LINES[team.team];
        if (diff === 0 ) { return 0 }
        return ((diff > 0 && pick === 'O') || (diff < 0 && pick === 'U')) ? diff : (-1 * diff);
    }
    
    players.map( player => {
        player.score = 0;
        teams.map( team => {
            return player.score += calcPoints( team, PICKS[player.name][team.team])
        });
        return players;
    })

    // sort the results
    let results = [];
    results = players.sort(( a, b ) => (a.score > b.score) ? -1 : (a.score === b.score) ? 0 : 1 );

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
                                {results.map( (result, i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{ result.name }</td>
                                            <td>{ result.score }</td>
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

export default Results;