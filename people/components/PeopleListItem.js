import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'

const PeopleListItem = props => {
  const { people, navigateToPeopleDetail } = props
  const { title, first, last } = people.name

  return (
    <TouchableOpacity onPress={() =>
      navigateToPeopleDetail({ people })
    }>
      <View style={style.line}>
        <Image style={style.avatar} source={{ uri: people.picture.thumbnail }} />
        <Text style={style.lineText}>
          { `${title} ${first} ${last}` }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  line: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    flexDirection: 'row',
    height: 60,
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 25,
    flex: 1,
    marginLeft: 15
  },
  lineText: {
    fontSize: 20,
    flex: 7,
    paddingLeft: 15,
    paddingRight: 15,
    textTransform: 'capitalize'
  }
})

export default PeopleListItem
