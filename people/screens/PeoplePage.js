import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import axios from 'axios'

import PeopleList from '../components/PeopleList'

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      peoples: [],
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    this.setState({ loading: true })

    try {
      const response = await axios.get('https://randomuser.me/api/', {
        params: {
          nat: 'br',
          results: 15
        }
      })

      this.setState({
        peoples: response.data.results,
        loading: false
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: true
      })
    }
  }

  render () {
    return (
      <View style={style.container}>
        {
          this.state.loading
            ? <ActivityIndicator size='large' color='#6ca2f7' />
            : this.state.error
                ?  <Text style={style.error}>Ops, algo deu errado.</Text>
                : <PeopleList
                    peoples={this.state.peoples}
                    onPressItem={pageParams => {
                      this.props.navigation.navigate('PeopleDetail', pageParams)
                    }} />
        }
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    alignSelf: 'center'
  }
})
