import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CustomEditor = ({ setBody, body }) => {
  const [text, setText] = useState("");
  // console.log(text, "editor");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
  ];

  return (
    <div className="text-editor">
      <ReactQuill
        theme="snow"
        value={body}
        onChange={setBody}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default CustomEditor;
