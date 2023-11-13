"use client";

import axios from 'axios';
import { useState } from 'react';

const apiKey = process.env.API_KEY;
const endpoint = process.env.API_ENDPOINT;

export default function Home() {
  const [inputText, setInputText] = useState<string>('');
  const [result, setResult] = useState<any>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (!endpoint) {
        console.error('Endpoint is not defined');
        return;
      }
  
      const response = await axios.post(endpoint, { body: inputText }, {
        headers: { 'Content-Type': 'application/json' },
      });
      const data = response.data;
      setResult(data);
    } catch (error) {
      console.error('Error during request:', error);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full mx-auto">
        <div className="text-center">
        <div className="mt-4">
          <textarea value={inputText} onChange={handleInputChange} className="p-2 border border-gray-700 w-full" />
          </div>
          <div className="mt-4">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          </div>
          <div className="mt-4 text-left">
            <p>noun: {result.noun}</p>
            <p>verb: {result.verb}</p>
            <p>adjective: {result.adjective}</p>
            <p>adverb: {result.adverb}</p>
            <p>preposition: {result.preposition}</p>
            <p>conjunction: {result.conjunction}</p>
            <p>pronoun: {result.pronoun}</p>
            <p>interjection: {result.interjection}</p>
            <p>determiner: {result.determiner}</p>
            <p>numeral: {result.numeral}</p>
          </div>
        </div>
      </div>
    </main>
  );
}


