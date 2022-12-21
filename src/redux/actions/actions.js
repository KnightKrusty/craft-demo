import { get } from '../../api/apiConfig';
import { GET_DEPENDENCIES } from './actionsTypes';
// const getDependencies = () => {
//     return {
//         type: 'GET_DEPENDENCIES'
//     }
// }

const getDependencies = () => dispatch => {
    get('dependencies', {}).then(data => {
        debugger
        console.log(data)
        dispatch({ type: GET_DEPENDENCIES, dependencies: data })
    })
}

export { getDependencies };