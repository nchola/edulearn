
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "blue" | "orange" | "green" | "purple";
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color = "blue",
}: FeatureCardProps) => {
  const colorClasses = {
    blue: {
      background: "bg-primary-100",
      iconColor: "text-primary-500",
    },
    orange: {
      background: "bg-accent-100",
      iconColor: "text-accent-500",
    },
    green: {
      background: "bg-green-100",
      iconColor: "text-green-500",
    },
    purple: {
      background: "bg-purple-100",
      iconColor: "text-purple-500",
    },
  };

  const { background, iconColor } = colorClasses[color];

  return (
    <div className="group p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className={`${background} p-3 inline-block rounded-lg mb-4`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
