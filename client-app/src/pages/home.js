import React, { useState } from "react";
import '../App.css';



const onTxTrack = (txid) => {
    window.location.href = "/txtrack/" + txid;
}

const Home = (props) => {

    const [txid, setTxid] = useState("");

    return (<React.Fragment>
        <div className="container">
            <h5>to the moon</h5>
            <div style={{"display": "flex"}}>
                <input className={"txid"} value={txid} onChange={(e) => {
                    setTxid(e.target.value);
                }}></input>
                <button className={"txtrack"} onClick={() => onTxTrack(txid)}>txTrack</button>
            </div>

        </div>

          </React.Fragment>);
  }   
  
export default Home;