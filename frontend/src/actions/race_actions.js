import * as APIUtil from '../util/race_api_util';

export const RECEIVE_ALL_RACES = "RECEIVE_ALL_RACES";
export const RECEIVE_CURRENT_RACE = "RECEIVE_CURRENT_RACE";
export const RECEIVE_RACE_ERRORS = "RECEIVE_RACE_ERRORS";
export const RECEIVE_LEADERBOARD_RACES = "RECEIVE_LEADERBOARD_RACES";
export const RECEIVE_USER_STATS = "RECEIVE_USER_STATS";

export const receiveAllRaces = races => ({
    type: RECEIVE_ALL_RACES,
    races
});

export const receiveLeaderboardRaces = leaderboardRaces => ({
    type: RECEIVE_LEADERBOARD_RACES,
    leaderboardRaces
});

export const receiveCurrentRace = race => ({
    type: RECEIVE_CURRENT_RACE,
    race
});

export const receiveUserStats = userStats => ({
    type: RECEIVE_USER_STATS,
    userStats
});

export const receiveRaceErrors = errors => ({
    type: RECEIVE_RACE_ERRORS,
    errors
});

export const fetchRaces = username => dispatch => (
    APIUtil.fetchRaces(username)
        .then(
            races => dispatch(receiveAllRaces(races)),
            err => dispatch(receiveRaceErrors(err.response.data))
        )
);

export const fetchUserStats = username => dispatch => (
    APIUtil.fetchUserStats(username)
        .then(
            stats => dispatch(receiveUserStats(stats)),
            err => dispatch(receiveRaceErrors(err.response.data))
        )
);

export const fetchLeaderboardRaces = () => dispatch => (
    APIUtil.fetchLeaderboardRaces()
        .then(
            leaderboardRaces => dispatch(receiveLeaderboardRaces(leaderboardRaces)),
            err => dispatch(receiveRaceErrors(err.response.data))
        )
);

export const saveRace = race => dispatch => (
    APIUtil.saveRace(race)
        .then(
            race => dispatch(receiveCurrentRace(race)),
            err => dispatch(receiveRaceErrors(err.response.data))
        )
);
