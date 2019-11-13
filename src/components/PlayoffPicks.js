import React, { Component } from 'react';

class PlayoffPicks extends Component {

    state = {
        loaded: false
    }
    
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
        return(
            <div>
                <h2>Playoff Picks will go here...eventually</h2>
            </div>
        )
    }
}

export default PlayoffPicks;