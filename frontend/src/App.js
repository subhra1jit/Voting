import React, { useState, useEffect } from "react";
import getWeb3 from "./getWeb3";
import Voting from "./contracts/Voting.json";

import Admin from "./components/Admin/Admin";
import UserReg from "./components/User/UserRegistartion";
 import Intro from "./components/Intro";
 import Instruction from "./components/Instruction";
 import Home from "./components/User/Home";
 import Userlogin from "./components/User/UserLogin";
 import Voterpage from "./components/User/Voterpage";
import "./App.css";
import { BrowserRouter as Router,Route, Link,Switch } from "react-router-dom";

const App = () => {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const networkId = await web3.eth.net.getId();

        const deployedNetwork = Voting.networks[networkId];
        console.log("Contract Address:", deployedNetwork.address);
        const instance = new web3.eth.Contract(
          Voting.abi,
          deployedNetwork && deployedNetwork.address
        );
        setAddress(deployedNetwork.address);
        setState({ web3, contract: instance });
      } catch (error) {
        alert("Falied to load web3 or contract.");
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <>
    <Router>
        <Switch>
        <Route exact path="/"> <Intro/></Route>
        <Route path="/register"><UserReg/></Route>
        <Route path="/login"><Userlogin/></Route>
        <Route path="/userpage"><Home/></Route>
        <Route path="/votepage"><Voterpage/></Route>
        <Route path="/adminlogin"><Admin/></Route>
        <Route path="/instruction"><Instruction/></Route>
        </Switch>
    </Router>
    </>
  );
};
export default App;