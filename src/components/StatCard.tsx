
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  change?: {
    value: number;
    positive: boolean;
  };
  color?: "blue" | "orange" | "green" | "purple";
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  description,
  change,
  color = "blue",
}: StatCardProps) => {
  const colorClasses = {
    blue: {
      background: "bg-primary-100",
      iconColor: "text-primary-500",
      textColor: "text-primary-700",
    },
    orange: {
      background: "bg-accent-100",
      iconColor: "text-accent-500",
      textColor: "text-accent-700",
    },
    green: {
      background: "bg-green-100",
      iconColor: "text-green-500",
      textColor: "text-green-700",
    },
    purple: {
      background: "bg-purple-100",
      iconColor: "text-purple-500",
      textColor: "text-purple-700",
    },
  };

  const { background, iconColor, textColor } = colorClasses[color];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            {change && (
              <p
                className={`ml-2 text-xs font-medium ${
                  change.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {change.positive ? "+" : "-"}
                {change.value}%
              </p>
            )}
          </div>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
        <div className={`${background} p-3 rounded-lg`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
