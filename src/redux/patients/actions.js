import axios from 'axios';
import {
  FETCH_PATIENT_REQUEST,
  FETCH_PATIENT_SUCCESS,
  FETCH_PATIENT_FAILED
} from './type';

const url = 'http://mnrhweb.com/api/imc';

export const fetchPatients = () => dispatch => {
  dispatch({ type: FETCH_PATIENT_REQUEST });

  axios.get(`${url}/patients`)
    .then(res => {
      dispatch({ type: FETCH_PATIENT_SUCCESS, payload: res.data.pager.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PATIENT_FAILED, payload: err.response.data })
    });
}