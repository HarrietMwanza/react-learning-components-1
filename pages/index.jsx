import Image from 'next/image'
import React, { useState } from 'react';
export default function Home() {
    const magicNumber = 30;
  const [cardResults, setCardResults] = useState([magicNumber / 3]);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
<div>
<card number={magicNumber} />
  </div>  
    </main>
  );

}
function card({ magicNumber }) {
  return (
      <h2>magicNumber is {magicNumber}</h2>
  );
}
