
import React, { useEffect, useState } from "react";

const TxTrack = (props) => {
    const { tx } = props.match.params; 
    const [txWallet, setTxWallet] = useState("");
    const [tokenHoldings, setTokenHoldings] = useState([]);

    useEffect(() => {
        if(txWallet.length === 0){
            fetch(`/api/tx/${tx}`)
            .then((response) => response.json())
            .then((response) => {
                console.log("txWallet", response);
                setTxWallet(response.contractToken);
            });
        }

        if(tokenHoldings.length === 0 && txWallet.length > 0){
            fetch(`/api/tokenholdings/${txWallet}`)
            .then((response) => response.json())
            .then((response) => {
                console.log("tokenHoldings", response);
                setTokenHoldings(response);
            });
        }
    })
    return (<React.Fragment>
            <h5>tx${tx}</h5>
            <h5>wlt${txWallet ? txWallet : "loading..."}</h5>
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
  
export default TxTrack;