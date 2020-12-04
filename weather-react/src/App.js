import React from 'react';

const api = {
  key: "c0f22d45c9850b5eff55c8e331662738",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
