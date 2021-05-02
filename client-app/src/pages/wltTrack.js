
import React, { useEffect, useState } from "react";

const WalletTrack = (props) => {
    const { wallet } = props.match.params; 
    const [tokenHoldings, setTokenHoldings] = useState([]);

    useEffect(() => {

        if(tokenHoldings.length === 0 && wallet.length > 0){
            fetch(`/api/tokenholdings/${wallet}`)
            .then((response) => response.json())
            .then((response) => {
                console.log("tokenHoldings", response);
                setTokenHoldings(response);
            });
        }
    })
    return (<React.Fragment>
            <h5>wlt${wallet ? wallet : "loading..."}</h5>
            <table className="holdings">
                <tr>
                    <td>symbol</td>
                    <td>tokenName</td>
                    <td>tokenName</td>
                    <td>BNB</td>
                    <td>USD</td>
                </tr>
                {tokenHoldings.map((token) => {
                    return (
                        <tr>
                            <td>{token.symbol}</td>
                            <td>{token.tokenName}</td>
                            <td>{token.tokenPrice}</td>
                            <td>{token.valueInBNB}</td>
                            <td>{token.valueInUSD}</td>
                        </tr>
                    )
                })}
            </table>
          </React.Fragment>);
  }   
  
export default WalletTrack;