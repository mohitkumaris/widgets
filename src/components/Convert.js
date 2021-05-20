import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  const [debounceText, setDebounceText] = useState(text);

  // to capture final input text
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceText(text);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    const translatedText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounceText,
            target: language.value,
            key: "",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    translatedText();
  }, [debounceText, language]);

  return (
    <div className="ui form">
      <div className="field">
        <h1>{translated}</h1>
      </div>
    </div>
  );
};
export default Convert;
