import React from "react";
import axios from "axios";
import CryptoListItem from "./CryptoListItem";

class CryptoList extends React.Component {
  state = {
    currencies: []
  };
  componentDidMount = () => {
    axios
      .get("https://www.cryptocompare.com/api/data/coinlist/")
      .then(returned => {
        const returnedCrypto = returned.data.Data;
        const currencies = [];
        for (var a = 0; a < 20; a++) {
          currencies.push(returnedCrypto[`${Object.keys(returnedCrypto)[a]}`]);
        }
        this.setState({ currencies });
      });
  };
  render() {
    const currenciesList = this.state.currencies.map((currency, index) => {
      return (
        <CryptoListItem
          key={currency.Id}
          index={index + 1}
          imgUrl={currency.ImageUrl}
          currencyName={currency.Name}
        />
      );
    });
    return <ul className="crypto-list">{currenciesList}</ul>;
  }
}

export default CryptoList;
