import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

const INITIAL_STATE = {};

const streamsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_STREAMS:
      return fetchStreams(payload);
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      return deleteStream(state, payload);
    default:
      return state;
  }
};

export default streamsReducer;

const fetchStreams = (payload) => {
  const newState = {};

  for (let stream of payload) {
    newState[stream.id] = stream;
  }

  return newState;
};

const deleteStream = (state, payload) => {
  const newState = { ...state };
  delete newState[payload.id];
  return newState;
}
