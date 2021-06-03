import React, { Component } from 'react'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      // Provider will provide all the data within store with all components within it
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}

export default App;