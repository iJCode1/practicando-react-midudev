import { useState } from "react";
import "./App.css";
import TwitterCard from "./TwitterCard";

function App() {
  const data = [
    {
      username: "iJCode1",
      name: "Joel Dominguez",
      isFollowing: true,
    },
    {
      username: "midudev",
      name: "Miguel Ángel Durán",
      isFollowing: false,
    },
    {
      username: "LeonidasEsteban",
      name: "Leonidas Esteban",
      isFollowing: true,
    },
  ];

  return (
    <section className="app">
      <h2 style={{ color: "white" }}>A quién seguir</h2>

      {data.map(({ username, name, isFollowing }) => (
        <TwitterCard key={username} username={username} initialIsFollowing={isFollowing}>
          {name}
        </TwitterCard>
      ))}
    </section>
  );
}

export default App;
