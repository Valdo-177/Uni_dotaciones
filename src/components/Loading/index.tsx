import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import React from 'react';

interface LoadingType {
  show: boolean;
}

const Loading: React.FC<LoadingType> = ({ show }) => {
  if (show) {
    return (
      <div className="absolute top-0 left-0 bg-[#000000d6] text-white flex items-center justify-center w-full h-screen">
        <LoadingSpinner />
      </div>
    );
  }
  return null;
};

export default Loading;
