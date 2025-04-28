
import { Link } from "react-router-dom";
import { Star, Clock, BookOpen, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  students: number;
  image: string;
  category: string;
  price?: number;
  discount?: number;
}

const CourseCard = ({
  id,
  title,
  instructor,
  rating,
  reviewCount,
  level,
  duration,
  lessons,
  students,
  image,
  category,
  price,
  discount,
}: CourseCardProps) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        <span className="text-yellow-400">
          <Star className="h-4 w-4 fill-current" strokeWidth={0} />
        </span>
        <span className="ml-1 text-sm font-medium text-gray-900">{rating.toFixed(1)}</span>
        <span className="mx-1 text-gray-400">•</span>
        <span className="text-sm text-gray-500">({reviewCount})</span>
      </div>
    );
  };

  const levelColorMap = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-purple-100 text-purple-800",
  };

  const levelColor = levelColorMap[level] || "bg-gray-100 text-gray-800";

  return (
    <Link to={`/course/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
        {/* Image container with 16:9 aspect ratio */}
        <div className="relative pt-[56.25%]">
          <img
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* Category badge */}
          <Badge className="absolute top-3 left-3 bg-white/90 text-gray-700 font-medium hover:bg-white/95">
            {category}
          </Badge>
        </div>

        <div className="p-4">
          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>

          {/* Instructor */}
          <p className="text-sm text-gray-500 mb-2">
            by <span className="font-medium">{instructor}</span>
          </p>

          {/* Rating */}
          <div className="mb-3">{renderStars(rating)}</div>

          {/* Course info */}
          <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1" />
              {duration}
            </div>
            <div className="flex items-center">
              <BookOpen className="h-3.5 w-3.5 mr-1" />
              {lessons} lessons
            </div>
            <div className="flex items-center">
              <Users className="h-3.5 w-3.5 mr-1" />
              {students.toLocaleString()} students
            </div>
          </div>

          {/* Level badge */}
          <div className="mb-3">
            <span className={`inline-block px-2 py-1 rounded text-xs ${levelColor}`}>
              {level}
            </span>
          </div>

          {/* Price */}
          {typeof price !== "undefined" && (
            <div className="flex items-center">
              {discount ? (
                <>
                  <span className="font-semibold text-gray-900">${(price - (price * discount / 100)).toFixed(2)}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
                  <span className="ml-2 text-xs font-semibold text-accent-600">
                    {discount}% off
                  </span>
                </>
              ) : (
                <span className="font-semibold text-gray-900">${price.toFixed(2)}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
