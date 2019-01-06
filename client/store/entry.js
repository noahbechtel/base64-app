import axios from 'axios'

const GET_ENTRIES = 'GET_ENTRIES'
const SET_CONTENT = 'SET_CONTENT'

const gotEntries = entries => ({ type: GET_ENTRIES, entries })

export const getEntries = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/base64')
    dispatch(gotEntries(data))
  } catch (err) {
    console.error(err)
  }
}

export const setContent = str => ({ type: SET_CONTENT, str })

export const makeEntry = entry => async () => {
  try {
    await axios.post('/api/base64', entry)
  } catch (err) {}
}

export const deleteEntry = () => async () => {
  try {
    await axios.delete(`/api/base64`)
  } catch (err) {
    console.error(err)
  }
}

export default function (state = { entries: [], content: '' }, action) {
  switch (action.type) {
    case GET_ENTRIES:
      return { ...state, entries: action.entries }
    case SET_CONTENT:
      return { ...state, content: action.str }
    default:
      return state
  }
}
