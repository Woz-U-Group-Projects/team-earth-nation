import React, { Component } from 'react';

const BTCprice = 7523.95;
const BTCsupply = 18075875;
const BTCmarketcap = BTCprice*BTCsupply;

const ETHprice= 151.97 ;
const ETHsupply= 108751638;
const ETHmarketcap = ETHprice*ETHsupply;

const XRPprice = 0.225645;
const XRPsupply = 43299885509;
const XRPmarketcap = XRPprice*XRPsupply

const USDTprice = 1;
const USDTsupply = 4108044456;
const USDTmarketcap = USDTprice*USDTsupply;

const BCHprice = 218.03;
const BCHsupply = 18141538;
const BCHmarketcap = BCHprice*BCHsupply;

const LTCprice = 47.40;
const LTCsupply = 63740575;
const LTCmarketcap = LTCprice*LTCsupply;

const EOSprice = 2.76;
const EOSsupply = 942389758;
const EOSmarketcap = EOSprice*EOSsupply;

const BNBprice = 15.60;
const BNBsupply = 187536713;
const BNBmarketcap = BNBprice*BNBsupply;

const BSVprice = 107.03;
const BSVsupply = 18068415;
const BSVmarketcap = BSVprice*BSVsupply;

const XLMprice = 0.057525;
const XLMsupply = 20054779554;
const XLMmarketcap = XLMprice*XLMsupply;


class App extends Component {
        constructor(props) {
       super(props) 
       this.state = { 
          cryptocoins: [
             { id: "BTC", name: "Bitcoin", price: "$"+BTCprice , supply: BTCsupply, marketcap: "$"+BTCmarketcap },
             { id: "ETH", name: "Ethereum", price: "$"+ETHprice , supply: ETHsupply, marketcap: "$"+ETHmarketcap },
             { id: "XRP", name: "Ripple", price: "$"+XRPprice , supply: XRPsupply, marketcap: "$"+XRPmarketcap },
             { id: "USDT", name: "Tether", price: "$"+USDTprice , supply: USDTsupply, marketcap: "$"+USDTmarketcap },
             { id: "BCH", name: "Bitcoin Cash", price: "$"+BCHprice , supply: BCHsupply, marketcap: "$"+BCHmarketcap },
             { id: "LTC", name: "Litecoin", price: "$"+LTCprice , supply: LTCsupply, marketcap: "$"+LTCmarketcap },
             { id: "EOS", name: "EOS", price: "$"+EOSprice , supply: EOSsupply, marketcap: "$"+EOSmarketcap },
             { id: "BNB", name: "Binance Coin", price: "$"+BNBprice , supply: BNBsupply, marketcap: "$"+BNBmarketcap },
             { id: "BSV", name: "Bitcoin SV", price: "$"+BSVprice , supply:  BSVsupply, marketcap: "$"+BSVmarketcap },
             { id: "XLM", name: "Stellar", price: "$"+XLMprice , supply: XLMsupply, marketcap: "$"+XLMmarketcap }
          ]
       }
    }

    renderTableForCoinData() {
        return this.state.cryptocoins.map((cryptocoins) => {
           return (
              <tr key={cryptocoins.id}>
                 <td>{cryptocoins.id}</td>
                 <td>{cryptocoins.name}</td>
                 <td>{cryptocoins.price}</td>
                 <td>{cryptocoins.supply}</td>
                 <td>{cryptocoins.marketcap}</td>
              </tr>
           )
           
        })
     }


     renderTableHeader() {
        let header = Object.keys(this.state.cryptocoins[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    render() { 
        return (
           <div>
              <h1>Top 10 Coins</h1>
              <hr></hr>
              <table id="cryptocoins">
               <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableForCoinData()}
                
               </tbody>
            </table>
           </div>
        )
     }

  }
 


export default App;