import React from 'react';

const Tulostus = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <h2>Tulostussivu</h2>
      <p>Tämä on tulostettava sisältö.</p>
      <button onClick={handlePrint}>Tulosta</button>
    </div>
  );
};

export {Tulostus} ;
