import React from "react";
import axios from "axios";

class CryptoListItem extends React.Component {
  state = { priceInUsd: null };
  componentDidMount = () => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/price?fsym=${
          this.props.currencyName
        }&tsyms=USD`
      )
      .then(returned => {
        this.setState({ priceInUsd: returned.data.USD });
      });
  };
  render() {
    const props = this.props;
    return (
      <li className="crypto-list__item">
        <span className="crypto-list__item-index">{props.index}:</span>
        <img
          src={`https://www.cryptocompare.com${props.imgUrl}`}
          alt="currency icon"
          className="crypto-list__item-image"
        />
        <span className="crypto-list__item-name">
          Name: {props.currencyName}
        </span>
        <span className="crypto-list__item-price-usd">
          Price in USD: {this.state.priceInUsd}
        </span>
      </li>
    );
  }
}

export default CryptoListItem;
