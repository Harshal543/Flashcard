import { AsyncStorage } from 'react-native'
import { formatData } from './_dummyData'
import { DECK_STORAGE_KEY } from './helpers'

export function fetchData() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => {
      formatData(decks)
    },
    (error) => {
      console.log('getItem error :', error)
    })
}