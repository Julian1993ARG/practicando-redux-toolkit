import axios from 'axios'
import { getAllCharacters, getCharById } from './charactersSlice'

export const getChars = () => dispatch => {
  axios.get('https://rickandmortyapi.com/api/character')
    .then(res => { dispatch(getAllCharacters(res.data.results)) })
}

export const getChar = id => dispatch => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => { dispatch(getCharById(res.data)) })
}
