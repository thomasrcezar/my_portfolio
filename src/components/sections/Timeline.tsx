import React from 'react';

// Define the structure for a timeline item based on translation keys
interface TimelineItemProps {
  type: 'education' | 'experience';
  date: string;
  title: string;
  institution: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItemProps[];
}

// Simple Timeline component
const Timeline: React.FC<TimelineProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null; // Don't render anything if there are no items
  }

  return (
    <div className="relative border-l-2 border-blue-500 pl-8 space-y-10">
      {items.map((item, index) => (
        <div key={index} className="relative">
          {/* Dot on the timeline */}
          <div className={`absolute -left-[42px] top-1 w-4 h-4 rounded-full ${item.type === 'education' ? 'bg-green-500' : 'bg-purple-500'}`}></div>

          {/* Content */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <span className="text-sm text-gray-400 mb-1 block">{item.date}</span>
            <h3 className="text-xl font-bold mb-1">{item.title}</h3>
            <p className="text-blue-400 mb-2 font-semibold">{item.institution}</p>
            <p className="text-gray-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
