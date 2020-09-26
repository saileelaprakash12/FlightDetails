
import axios from 'axios';
const Action =()=>{
    return (dispatch,getState) => {
        axios.get('https://api.spacexdata.com/v3/history')
            .then((response)=>{
                dispatch({
                    type:"Flight_Data",
                    payload:response.data

                })
                
            })
    }

}
export default Action