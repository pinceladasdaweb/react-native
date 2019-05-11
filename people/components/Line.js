import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Line = ({ label = '', content = '-' }) => {
  return (
    <View style={style.line}>
      <Text style={[style.cell, style.label]}>{ label }</Text>
      <Text style={[style.cell, style.content]}>{ content }</Text>
    </View>
  )
}

const style = StyleSheet.create({
  line: {
    borderColor: '#c5c5c5',
    borderWidth: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  cell: {
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10
  },
  label: {
    flex: 1,
    fontWeight: 'bold'
  },
  content: {
    flex: 3,
  }
})

export default Line