import { RECEIVE_CURRENT_RACE, RECEIVE_ALL_RACES } from '../../actions/race_actions';

const RaceReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_RACE:
            return action.currentRace;
        case RECEIVE_ALL_RACES:
            return action.races;
        default:
            return state;
    }
};

export default RaceReducer;