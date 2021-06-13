import history from '../history';
import { streamApi } from '../apis';
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from './types';

export const fetchStreams = () => async (dispatch) => {
  const response = await streamApi.get('/streams');
  
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streamApi.get(`/streams/${id}`);
  
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const userId = getState().auth.user?.id || null;
  const response = await streamApi.post('/streams', {...formValues, userId });
  
  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push('/');
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streamApi.put(`/streams/${id}`, formValues);
  
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
  await streamApi.delete(`/streams/${id}`);
  
  dispatch({ type: DELETE_STREAM, payload: { id } });
};
