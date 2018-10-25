import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

class DeckList extends React.Component {
  render() {
    return ( // Try different View options FlatView or ListView
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Card title1</Text>
          <Text>No.of cards</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>Card title2</Text>
          <Text>No.of cards</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>Card title3</Text>
          <Text>No.of cards</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>Card title4</Text>
          <Text>No.of cards</Text>
        </View>
         <View style={styles.box}>
          <Text style={styles.title}>Card title5</Text>
          <Text>No.of cards</Text>
        </View>
         <View style={styles.box}>
          <Text style={styles.title}>Card title6</Text>
          <Text>No.of cards</Text>
        </View>
         <View style={styles.box}>
          <Text style={styles.title}>Card title7</Text>
          <Text>No.of cards</Text>
        </View>
         <View style={styles.box}>
          <Text style={styles.title}>Card title8</Text>
          <Text>No.of cards</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>Card title9</Text>
          <Text>No.of cards</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
  },
  title: {
    fontSize:25,
  },
  box: {
    height: 150,
    borderRadius: 7,
    borderStyle: 'solid',
    borderColor: '#000',
    backgroundColor: 'white',
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 5,
  },
})

export default DeckList