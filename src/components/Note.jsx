import React, { useState } from "react";

const Note = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("pdf", file);

    try {
      const response = await fetch("http://localhost:5000/post/upload-pdf", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Note created successfully");
        // Handle successful respons
        setContent("")
        setTitle("")
        setFile("")
      } else {
        console.error("Failed to create note");
        // Handle error response
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network error
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white  p-2 sm:p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Provide Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full sm:px-3 sm:py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file"
          >
            Upload PDF
          </label>
          <input
            type="file"
            id="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Note;
