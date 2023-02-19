import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react'

function App() {
  const [isFocused, setIsFocused] = useState(
    "https://res.cloudinary.com/dt9f36crx/image/upload/v1672155019/FUNPASSWORD/Monk_snmddc.jpg"
  );

  const [reveal, setReveal] = useState(false);
  function passwordReveal() {
    setReveal(!reveal);
  }

  function checkChange() {
    if (
      isFocused ===
      "https://res.cloudinary.com/dt9f36crx/image/upload/v1671605940/FUNPASSWORD/ApePassWord2_jxgmds.jpg"
    ) {
      setIsFocused(
        "https://res.cloudinary.com/dt9f36crx/image/upload/v1671605941/FUNPASSWORD/ApePassWord3_hdaoys.jpg"
      );
    } else if (
      isFocused ===
      "https://res.cloudinary.com/dt9f36crx/image/upload/v1671605941/FUNPASSWORD/ApePassWord3_hdaoys.jpg"
    ) {
      setIsFocused(
        "https://res.cloudinary.com/dt9f36crx/image/upload/v1671605940/FUNPASSWORD/ApePassWord2_jxgmds.jpg"
      );
    }
  }
  // function callBoth() {
  //   passwordReveal();
  //   checkChange();
  // }

  return (
    <div className="App">
      <img alt="ape" src={isFocused} />
      <main>
        <div>
          <span>Email</span>
          <br />
          <input
            type="email"
            onClick={() =>
              setIsFocused(
                "https://res.cloudinary.com/dt9f36crx/image/upload/v1671605942/FUNPASSWORD/ApePassWord_ndjgd2.jpg"
              )
            }
          />
        </div>
        <div className="password">
          <div className="password-box">
            <div>
              <span>Password</span>
            </div>
            <div className="check" onClick={checkChange}>
              <input type="checkbox" onClick={passwordReveal}></input>
              <p>Show</p>
            </div>
          </div>

          <input
            type={reveal ? "text" : "password"}
            onClick={() =>
              setIsFocused(
                "https://res.cloudinary.com/dt9f36crx/image/upload/v1671605940/FUNPASSWORD/ApePassWord2_jxgmds.jpg"
              )
            }
          />
        </div>
      </main>
    </div>
  );
}

export default App;
