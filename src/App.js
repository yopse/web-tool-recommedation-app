import React, { useState } from "react";

const buttonList = ["code", "docs", "webdev", "devops"];

const toolsBucket = {
  code: {
    tools: ["VSCode", "Atom", "Sublime", "Notepad++"],
    ratings: ["5/5", "4/5", "3.5/5", "3/5"],
  },

  docs: {
    tools: ["MDN", "stackoverflow", "W3Schools"],
    ratings: ["5/5", "4.5/5", "4/5"],
  },

  webdev: {
    tools: ["Chrome devtools", "codesandbox", "codepen", "Netlify"],
    ratings: ["5/5", "4.5/5", "4/5", "4/5"],
  },

  devops: {
    tools: ["Git", "Docker", "kubernetes"],
    ratings: ["5/5", "4.5/5", "4/5"],
  },
};

export default function App() {
  const [toolName, setToolName] = useState("webdev");

  return (
    <div className="App">
      <div className="header">
        devTools
        <p>some recommended developer tools</p>
      </div>

      <main>
        <div className="leftPanel">
          <p>Click to get started</p>

          {buttonList.map((item, index) => {
            return (
              <button
                className="leftPanelButton"
                key={index}
                onClick={() => setToolName(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="rightPanel">
          <p>Recommendations: </p>
          <ul>
            {toolsBucket[toolName].tools.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <span> {toolsBucket[toolName].ratings[index]} </span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
