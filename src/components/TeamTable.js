import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Row from './Row';
import LINES from '../data/lines';

class TeamTable extends Component {

    state = {
        teams: [],
        loaded: false
    };

    componentDidMount() {
        fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams?limit=30')
        .then( response => response.json() )
        .then( json => {
            const teamData = json.sports[0].leagues[0].teams;
            let teams = [];
            teamData.map( ( team, i ) => {
                return(
                    teams.push( {
                    id: i,
                    team: team.team.abbreviation,
                    wins: team.team.record.items[0].stats[1].value,
                    gamesPlayed: team.team.record.items[0].stats[8].value,
                    logo: team.team.logos[0].href
                } )
                );
            } );
            this.setState( { teams, loaded: true } );
        } )
        .catch( error => {
            alert( 'Error: ', error )
        });
    }

    render() {
        const { teams, loaded } = this.state;
        if( loaded ){
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
        } else {
            return(
                <div>Loading...</div>
            )
        }
    }
}

export default TeamTable;