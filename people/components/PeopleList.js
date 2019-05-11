import React from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
  const { peoples, onPressItem } = props

  return (
    <FlatList
      style={ style.container }
      data={ peoples }
      renderItem={({ item }) => (
        <PeopleListItem
          people={ item }
          navigateToPeopleDetail={ onPressItem } />
      )}
      keyExtractor={item => item.login.uuid} />
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default PeopleList
