import { useState } from "react";
import { GenreCard } from "./GenreCard";
import {
  IoChevronBack as Back,
  IoChevronForward as Next,
} from "react-icons/io5";

export const GenreCarousel = () => {
  const [scrollX, setScrollX] = useState(0)

  const genres = [
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Mystery' },
    { id: 3, name: 'Science Fiction' },
    { id: 4, name: 'Fantasy' },
    { id: 5, name: 'Romance' },
    { id: 6, name: 'Horror' },
    { id: 7, name: 'Adventure' },
    { id: 8, name: 'Historical Fiction' },
    { id: 9, name: 'Non-fiction' },
    { id: 10, name: 'Business' },
    { id: 11, name: 'Science' },
    { id: 12, name: 'Test' },
    { id: 13, name: 'Test' },
    { id: 14, name: 'Test' },
    { id: 15, name: 'Test' },
    { id: 16, name: 'Test' },
    { id: 17, name: 'Test' },
    { id: 18, name: 'Test' },
    { id: 19, name: 'Test' },
    { id: 20, name: 'Test' },
    { id: 21, name: 'Test' },
    { id: 22, name: 'Test' },
    { id: 23, name: 'Test' },
  ]

  const handleClick = (direction) => {
    if (direction === "prev") {
      if (scrollX === 0) {
        return;
      }
      setScrollX(scrollX - 128)
    } else if (direction === "next") {
      setScrollX(scrollX + 128)
    }
  }

  return (
    <div className="max-w-full overflow-hidden relative group">
      <div className={`invisible opacity-0 group-hover:${scrollX > 0 ? 'visible' : 'invisible'} group-hover:${scrollX > 0 ? 'opacity-100' : 'opacity-0'} absolute top-1/2 -translate-y-1/2 left-0 h-full w-18 mx-auto px-4 bg-gradient-to-r from-light-50 to-transparent flex items-center animate-hover z-10`}>
        <div className="cursor-pointer bg-light-50 mx-auto text-dark rounded-full p-1 shadow-lg animate-hover hover:bg-light-100" onClick={() => handleClick("prev")} role="button">
          <Back size={32} />
        </div>
      </div>
      <div className="flex gap-4 py-6 px-2 animate-hover" style={{ transform: `translateX(${-scrollX}px)` }}>
      {genres.map((genre) => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
      </div>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-1/2 -translate-y-1/2 right-0 h-full w-18 mx-auto px-4 bg-gradient-to-l from-light-50 to-transparent flex items-center animate-hover z-10">
        <div className="cursor-pointer bg-light-50 mx-auto text-dark rounded-full p-1 shadow-lg animate-hover hover:bg-light-100" onClick={() => handleClick("next")} role="button">
          <Next size={32} />
        </div>
      </div>
    </div>
  );
};
