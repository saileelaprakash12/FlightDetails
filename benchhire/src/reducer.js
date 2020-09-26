import {combineReducers} from 'redux';
const initialState={
    FlightData:[]
}

const reducerName = (state =initialState , action) => {
    switch (action.type) {
        case 'Flight_Data':
            console.log(action);
            return {
                ...state,
                FlightData:action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    reducerName
})
export default rootReducer;