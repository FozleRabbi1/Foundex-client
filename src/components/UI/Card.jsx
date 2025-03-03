import Image from "next/image";
import React from "react";
import { format } from 'date-fns';
import { TItem } from '@/src/types';

const Card = ({item }) => {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden">
      {item.images && item.images.length > 0 && (
        <div className="relative w-full h-40">
          <Image
            src={item.images[0]}
            alt={item.title}    
            layout="fill"
            objectFit="cover"   
            className="rounded-t-2xl"
          />
        </div>
      )}
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-sm text-gray-600">{item.description}</p>
        <p className="text-sm text-gray-500">Location: {item.location}</p>
        <span
          className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${item.status === "AVAILABLE" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          {item.status}

          <p> {format(new Date(item.dateFound), 'dd MMM yyyy')}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
