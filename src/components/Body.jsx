import React, { useState, useEffect, useCallback } from "react";
import "../assets/css/body.css";
import "whatwg-fetch";
import emojiMockedList from "../emojiList.js";
import CopyToClipboard from "./CopyToClipboard";
import debounce from "lodash.debounce";

export default function Body({ gifs, emoji }) {
  const [emojis, setEmojis] = useState([]);

  const getFilteredEmojiList = useCallback(() => {
    if (emoji.length === 0) {
      setEmojis(emojiMockedList);
    } else {
      const debounced = debounce(
        () => {
          const emojis = emojiMockedList.filter(
            (emo) => emo.keywords.includes(emoji) || emo.title.includes(emoji)
          );
          setEmojis(emojis);
        },

        300
      );
      debounced();
    }
  }, [emoji]);

  useEffect(() => {
    getFilteredEmojiList();
  }, [emoji, getFilteredEmojiList]);

  return (
    <div className="body">
      <ol>
        {emojis?.length > 0 &&
          emojis.map((emo) => (
            <CopyToClipboard key={emo.title}>
              {({ copy }) => (
                <button onClick={() => copy(emo.symbol)}>
                  <li>
                    {" "}
                    <p>
                      {emo.symbol} {emo.title}
                    </p>
                  </li>
                </button>
              )}
            </CopyToClipboard>
          ))}
        {gifs.length > 0 &&
          gifs.map((gifs) => (
            <CopyToClipboard key={gifs.id}>
              {({ copy }) => (
                <button onClick={() => copy(gifs.media[0]?.gif?.url)}>
                  <li>
                    {" "}
                    <img src={gifs.media[0]?.gif?.url} />
                  </li>
                </button>
              )}
            </CopyToClipboard>
          ))}
        {!gifs?.length && !emojis?.length ? (
          <li>No Emoji or Gifs Found </li>
        ) : null}
      </ol>
    </div>
  );
}
