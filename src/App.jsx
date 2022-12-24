import React from 'react';
import '../src/index.css';

export default function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <input class="disabled:opacity-75 ..." />

    <button class="bg-sky-600 hover:bg-sky-700 ...">
  Save changes
    </button>
    </>
  )
}