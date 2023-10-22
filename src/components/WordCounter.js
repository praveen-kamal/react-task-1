import React, { useState } from "react";
import "./WordCounter.css";

function WordCounter() {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
    };

    const wordCount = text.split(/\s+/).filter((word) => word !== "").length;

    return (
        <div>
            <h2>Responsive Paragraph Word Counter</h2>
            <textarea value={text} onChange={handleTextChange}></textarea>
            <p>Word Count: {wordCount}</p>
        </div>
    );
}

export default WordCounter;
