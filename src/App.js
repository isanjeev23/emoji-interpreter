import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😀": "smile",
  "❤️": "love",
  "😜": "wink",
  "😎": "cool",
  "🤗": "hug",
  "🙁": "sad",
  "💥": "collision",
  "💫": "Dizzy",
  "👨‍🔧": "Mechanic",
  "🧭": "Compass"
};

let emojis = Object.keys(emojiDictionary);

export default function App() {
  let [inputEmoji, setEmoji] = useState("");
  let [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    let inputEmoji = event.target.value;

    if (inputEmoji === "") {
      setEmoji("");
      setMeaning("");
    } else if (inputEmoji in emojiDictionary) {
      setEmoji(inputEmoji);
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setEmoji("Sorry! This emoji is not present in database");
      setMeaning("failed to recognise this emoji");
    }
  }

  function emojiClickHandler(emoji) {
    setEmoji(emoji);
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input onChange={inputHandler} placeholder="Search your emoji" />

      <h2>{inputEmoji}</h2>
      <h3>{meaning}</h3>

      {emojis.map((emoji, index) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          key={index}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
