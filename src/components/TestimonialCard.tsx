
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({
  name,
  role,
  avatar,
  content,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
            strokeWidth={0}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-grow">
        <p className="text-gray-700 mb-6 italic">"{content}"</p>
      </div>

      {/* User */}
      <div className="flex items-center mt-2">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
