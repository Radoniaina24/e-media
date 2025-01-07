import React from "react";

export default function TextArea() {
  return (
    <div className="mb-6 w-full px-4">
      <label
        htmlFor="message"
        className="mb-2 block text-sm font-medium text-gray-700 "
      >
        Message
      </label>
      <textarea
        id="message"
        rows={5}
        placeholder="Entrez votre message"
        className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500  "
      ></textarea>
    </div>
  );
}
