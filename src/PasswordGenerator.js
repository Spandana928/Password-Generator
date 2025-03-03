import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
    let characters = letters;

    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += characters[Math.floor(Math.random() * characters.length)];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Password Generator</h1>
        <div className="flex items-center bg-gray-700 p-3 rounded-lg mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 bg-transparent text-lg focus:outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="ml-3 bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600"
          >
            Copy
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password Length: {length}</label>
          <input
            type="range"
            min="6"
            max="24"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4 flex justify-between">
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            /> Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            /> Symbols
          </label>
        </div>
        <button
          onClick={generatePassword}
          className="w-full bg-green-500 py-2 rounded-lg text-lg hover:bg-green-600"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;