
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen } from "lucide-react";

interface ProgressCardProps {
  id: number;
  title: string;
  image: string;
  progress: number;
  lastAccessed: string;
  nextLesson: string;
  timeRemaining: string;
  lessonsCompleted: number;
  totalLessons: number;
}

const ProgressCard = ({
  id,
  title,
  image,
  progress,
  lastAccessed,
  nextLesson,
  timeRemaining,
  lessonsCompleted,
  totalLessons,
}: ProgressCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
      <div className="md:flex">
        {/* Image */}
        <div className="md:w-1/3 h-full">
          <img
            src={image}
            alt={title}
            className="h-48 md:h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 md:w-2/3">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-1 text-gray-900 line-clamp-2">
                {title}
              </h3>
              
              <div className="flex justify-between items-center mb-3">
                <div className="text-sm text-gray-500">
                  Last accessed: {lastAccessed}
                </div>
                <div className="text-sm font-medium text-primary-600">
                  {progress}% complete
                </div>
              </div>
              
              <Progress value={progress} className="h-2 mb-4" />
              
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1 text-gray-400" />
                  {lessonsCompleted}/{totalLessons} lessons
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-gray-400" />
                  {timeRemaining} remaining
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700">Next Lesson:</div>
                <div className="text-primary-600">{nextLesson}</div>
              </div>
            </div>

            <div className="mt-2">
              <Link 
                to={`/course/${id}`}
                className="inline-block px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors text-sm font-medium"
              >
                Continue Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
