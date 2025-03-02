import React, { useState, type JSX } from 'react';

interface TabItemProps {
    name: string;
    elem: JSX.Element;
}
interface TabsProps {
    items: TabItemProps[];
    className?: string;
}

const Tabs = ({ items = [], className = "" }: TabsProps) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="border-b border-gray-200 flex justify-center">
        {
          items.map((item, idx) => (
            <button
              key={idx}
              className={`px-7 py-1 ${activeTabIdx === idx ? 'border-b' : 'text-gray-400'}`}
              onClick={() => setActiveTabIdx(idx)}
            >
              {item.name}
            </button>
          ))
        }
      </div>
      {
        items[activeTabIdx] && <div className="my-5">{items[activeTabIdx].elem}</div>
      }
    </div>
  );
};

export default Tabs;
