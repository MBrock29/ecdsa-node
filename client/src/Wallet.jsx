import server from "./server";
import { useState } from "react";

function Wallet({ address, setAddress, balance, setBalance }) {
  async function onChange(evt) {
    const address = evt.target.value;
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }
  const [accountLoggedIn, setAccountLoggedIn] = useState("");
  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet Address
        <input
          placeholder="Type an address, for example: 0x1"
          value={address}
          onChange={onChange}
        ></input>
      </label>

      <div className="balance">Balance: {balance}</div>
      <div>
        <button onClick={() => setAccountLoggedIn("0x1")}>0x1</button>
        <button onClick={() => setAccountLoggedIn("0x2")}>0x2</button>
        <button onClick={() => setAccountLoggedIn("0x3")}>0x3</button>
      </div>
      <div>Logged in as: {accountLoggedIn}</div>
    </div>
  );
}

export default Wallet;
