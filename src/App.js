import React, {Component} from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { LoadingCard } from './components/LoadingCard/LoadingCard';
import { BitcoinCard } from './components/BitcoinCard/BitcoinCard';
import { getBitcoinPrice } from './api/bitcoin';
import './App.css';

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
        loading: false
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

  createBitcoinCards(bitcoinInfo) {
    return Object.keys.keys(bitcoinInfo.bpi)
    .map((item, index) => <BitcoinCard data={bitcoinInfo.bpi[item]}/>)
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
            loading === true 
            ? this.createLoadingCards() 
            : this.createBitcoinCards(bitcoinInfo)
          }
        </IonContent>
      </IonApp>
    );    
  }
}

export default App;
