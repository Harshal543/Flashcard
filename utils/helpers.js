import { AsyncStorage } from 'react-native'
import { formatData, DECK_STORAGE_KEY } from './_dummyData'

export function fetchData () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decks) => {
      return formatData(decks)
    })
}