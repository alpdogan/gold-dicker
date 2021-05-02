import React, { useState } from "react";
import '../App.css';



const onTxTrack = (txid) => {
    window.location.href = "/txtrack/" + txid;
}

const onWltTrack = (wltid) => {
    window.location.href = "/wlttrack/" + wltid;
}

const Home = (props) => {

    const [txid, setTxid] = useState("");
    const [wltid, setWltid] = useState("");

    return (<React.Fragment>
        <div className="container">
            <h5>to the moon</h5>
            <div style={{"display": "flex"}}>
                <input className={"trackid"} value={txid} onChange={(e) => {
                    setTxid(e.target.value);
                }}></input>
                <button className={"trackbtn"} onClick={() => onTxTrack(txid)}>txTrack</button>
            </div>
            <div style={{"display": "flex"}}>
                <input className={"trackid"} value={wltid} onChange={(e) => {
                    setWltid(e.target.value);
                }}></input>
                <button className={"trackbtn"} onClick={() => onWltTrack(wltid)}>wltTrack</button>
            </div>

        </div>

          </React.Fragment>);
  }   
  
export default Home;