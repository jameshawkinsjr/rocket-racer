import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {

    componentDidMount() {
        this.props.fetchLeaderboardRaces();
    }

    getLeaderboardRaces() {
        let races = (
                this.props.leaderboardRaces.map ( (race, idx) => {
                    let date = new Date(race.date)
                    return (
                        <li key={idx} className="flex">
                            <div>{ idx+1 }</div><div><Link to={`/${race.username}`}>{ race.username }</Link></div><div>{ `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}` }</div><div>{ race.averageSpeed } wpm</div>
                        </li>
                    )
                })
            )
            return (
                <ul>
                    <li className="headers flex">
                        <div className="leaderboard-index">Rank</div><div>User</div><div> Date</div><div> Speed </div>
                    </li>
                    { races }
                </ul>
            )
    }

    render () {
        return (
            <div className="landing-page-container flex-column">
                <div className="landing-page-leaderboard leaderboard flex-column">
                    <h2>Top 10 Races (All Time)</h2>                        
                    { this.props.leaderboardRaces[0] ? this.getLeaderboardRaces() : "Loading" }
                </div>
            </div>
        )
    }
}

export default LandingPage;