import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Legend from './Legend';
import TeamTable from './TeamTable';
import Results from './Results';

class Picks extends Component {
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

    render(){
        const { teams, loaded } = this.state;
        const players = [
            {
                name: 'AD',
            },
            {
                name: 'JR',
            },
            {
                name: 'JT',
            },
            {
                name: 'MM',
            },
            {
                name: 'JF',
            },
            {
                name: 'TK',
            },
            {
                name: 'JW',
            },
            {
                name: 'ZN',
            }
        ];

        if( loaded ){
            return(
                <div style={{padding: '10px'}}>
                    <h2 style={{padding: '10px', textDecoration: 'underline'}}>NBA Picks</h2>
                    <Legend />
                    <Results
                        teams={ teams }
                        players={ players }
                    />
                    <TeamTable teams={ teams } players={ players }/>
                </div>   
            )
        } else {
            return(
                <div>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            )
        }
    }
}

export default Picks;