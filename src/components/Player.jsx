import React from "react";
import { useState } from "react";
import "./Player.css";
const Player = ({ name, symbol , isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  function ToggleEditing() {
    setIsEditing(!isEditing);
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditing ? (
            <li>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </li>
          ) : (
            <span className="player-name">{newName}</span>
          )}

          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={ToggleEditing}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
};

export default Player;
