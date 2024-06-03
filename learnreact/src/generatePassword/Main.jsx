import { useState } from "react";

//ARRAY NOTATION
//DOT NOTATION

// const person = {
//     name: "Deepak",
//     age: 22
// }

// console.log(person.name)
// console.log(person["name"])

// console.log(person["age"])

// const key = "age"
// console.log(person[key])

function Main() {
  const source = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "12345676890",
    symbols: "!@#$%^&*()_+-=,<>?/",
  };

  const [strength, setStrength] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [passwordLength, setPasswordLength] = useState(8);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isPasswordCopied, setIsPasswordCopied] = useState(false);

  function handleOptionChange(e) {
    const value = e.target.value;
    // setStrength({uppercase: true, lowercase: true, numbers: true, symbols: false, symbols: true})

    setStrength({ ...strength, [value]: !strength[value] });
    setGeneratedPassword("");
  }

  function generatePassword() {
    if (passwordLength < 8 || passwordLength > 30)
      alert("Invalid Password Length");
    else {
      let passSource = "";
      let output = "";

      // SET THE PASSWORD SOURCE
      for (let x in strength) {
        if (strength[x]) passSource += source[x];
      }

      if (passSource.length === 0) alert("Select atleast one checkbox");
      else {
        for (let i = 0; i < passwordLength; i++) {
          output += passSource[Math.floor(Math.random() * passSource.length)];
        }

        console.log(output);
        setGeneratedPassword(output);
      }
    }
  }

  function copyPassword() {
    navigator.clipboard.writeText(generatedPassword);
    setIsPasswordCopied(true);
  }

  //   console.log(strength);

  return (
    <>
      <h1>Password Generator</h1>
      <div id="generator">
        <div className="options">
          <input
            type="checkbox"
            value="uppercase"
            checked={strength.uppercase}
            onChange={handleOptionChange}
          />
          Include Uppercase Letters
          <input
            type="checkbox"
            value="lowercase"
            checked={strength.lowercase}
            onChange={handleOptionChange}
          />
          Include Lowercase Letters
          <input
            type="checkbox"
            value="numbers"
            checked={strength.numbers}
            onChange={handleOptionChange}
          />
          Include Numbers
          <input
            type="checkbox"
            value="symbols"
            checked={strength.symbols}
            onChange={handleOptionChange}
          />
          Include Symbols
        </div>
      </div>

      <div className="length">
        <input
          type="number"
          min="8"
          max="30"
          placeholder="Password Length (8-30)"
          value={passwordLength}
          onChange={(e) => {
            setPasswordLength(e.target.value);
            setGeneratedPassword("");
          }}
        />
      </div>

      <div className="output">
        <input
          type="text"
          placeholder="Generated Password"
          readOnly
          value={generatedPassword}
        />
      </div>

      <button onClick={generatePassword}>Generate Password</button>
      <button onClick={copyPassword}>
        {isPasswordCopied ? "Password Copied" : "Copy Password"}
      </button>
    </>
  );
}

export default Main;
