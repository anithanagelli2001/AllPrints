//Reviews.jsx
import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, rating, comment }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <h3 className="text-lg font-semibold mr-2">{name}</h3>
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
    </div>
    <p className="text-gray-600">{comment}</p>
  </div>
);

const Reviews = () => {
  const reviews = [
    { name: 'Aisha', rating: 5, comment: 'Excellent quality prints and fast delivery!' },
    { name: 'Amar komma', rating: 4, comment: 'Great service, will use again for sure.' },
    { name: 'Anitha Nagelli', rating: 5, comment: 'The team was very helpful with my custom design.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-serif">
      <h2 className="text-3xl font-bold text-white mb-8">Client Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

