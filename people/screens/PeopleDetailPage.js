import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Line from '../components/Line'

export default class PeopleDetailPage extends React.Component {
  render () {
    const { people } = this.props.navigation.state.params

    return (
      <View style={style.container}>
        <Image
          source={{ uri: people.picture.large }}
          style={style.avatar} />
        <View style={style.detailContainer}>
          <Line label="Email:" content={people.email} />
          <Line label="Cidade:" content={people.location.city} />
          <Line label="Estado:" content={people.location.state} />
          <Line label="Tel:" content={people.phone} />
          <Line label="Cel:" content={people.cell} />
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
    flex: 1,
    padding: 15
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 190
  },
  detailContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    elevation: 1
  }
})
