import React from 'react';

const DemoWatermark = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
      <div className="rotate-[-30deg] text-[15vw] font-bold text-black/25 select-none whitespace-nowrap">
        DEMO
      </div>
    </div>
  );
};

export default DemoWatermark;
