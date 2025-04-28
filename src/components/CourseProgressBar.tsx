
import { Progress } from "@/components/ui/progress";

interface CourseProgressBarProps {
  completed: number;
  total: number;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
}

const CourseProgressBar = ({
  completed,
  total,
  showPercentage = true,
  size = "md",
}: CourseProgressBarProps) => {
  const percentage = Math.round((completed / total) * 100);
  
  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-600">
          {completed}/{total} completed
        </span>
        {showPercentage && (
          <span className="text-sm font-medium text-primary-600">{percentage}%</span>
        )}
      </div>
      <Progress value={percentage} className={sizeClasses[size]} />
    </div>
  );
};

export default CourseProgressBar;
