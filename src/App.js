import React, {Component} from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { LoadingCard } from './components/LoadingCard/LoadingCard'
import { getBitcoinPrice } from './api/bitcoin';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  state = {
    bitcoinInfo: {},
    loading: true
  };

  async componentDidMount() {
    const bitcoinInfo = await getBitcoinPrice();

    this.setState(
      {
        bitcoinInfo,
        loading: true
      }, 
      () => console.log(this.state)
    );
  }

  createLoadingCards() {
    return (
      <>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
      </>
    );
  }

  render() {
    const {bitcoinInfo, loading} = this.state;
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Bitcoin Price Tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <LoadingCard/>
          {
            loading === true ? this.createLoadingCards() : null
          }
        </IonContent>
      </IonApp>
    );    
  }
}

export default App;
