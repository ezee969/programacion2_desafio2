import React, { useState } from 'react';
import Answer from './Answer';
import Question from './Question';

export default function QA({ question, answer }) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected(!selected)}
      className='flex flex-col gap-2 mt-5 text-left '
    >
      <Question>{question}</Question>
      <Answer selected={selected}>{answer}</Answer>
    </div>
  );
}
