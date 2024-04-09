import React from 'react';

const Tulostus = () => {
  const openPrintDialog = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write();
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div>
      <button onClick={openPrintDialog}>Tulosta</button>
    </div>
  );
};

export { Tulostus };
