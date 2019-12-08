import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import * as firebase from 'firebase'

import {Home, NotFound} from '../'

const config = {
  apiKey: "AIzaSyCtwlUQ6-A0w0lqou9C_NvgWS7fLG9yq2k",
  authDomain: "product-compare-c0576.firebaseapp.com",
  projectId: "product-compare-c0576",
}
firebase.initializeApp(config)

class App extends Component {

  constructor(props) {
    super(props)

    firebase.auth().onAuthStateChanged(this.authStateObserver)
  }

  authStateObserver(user) {
    if (user) {
      // User is signed in
      window.FS.identify(user.email);
      window.FS.setUserVars({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        pricingPlan_str: "free"
      })
      window.FS.log('info', `${user.email} successfully signed in with Firebase using Google as the provider.`)
    } else {
      window.FS.log('warn', 'Missing user authentication, redirecting to Google auth provider...')
      // User is not signed in
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }

  render() {
    return (
      <div className="app">
        <div className="container mt-4">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
