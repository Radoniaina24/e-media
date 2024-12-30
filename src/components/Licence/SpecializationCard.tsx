import { CheckIcon } from "@heroicons/react/solid";

interface SpecializationCardProps {
  title: string;
  description: string;
  objectives: string[];
  careers: string[];
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({
  title,
  description,
  objectives,
  careers,
}) => {
  return (
    <div className="mb-12 rounded-lg bg-white p-8 shadow-lg">
      {/* Title and Description */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>

      {/* Grid Layout for Objectives and Careers */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Objectives Card */}
        <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Objectifs du parcours :
          </h3>
          <ul className="space-y-3">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <button className="mr-3 flex h-8 w-8 items-center justify-center rounded bg-gray-100 text-gray-600 shadow-sm">
                  <CheckIcon className="h-5 w-5 text-primary" />
                </button>
                <span className="text-gray-600">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Careers Card */}
        <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">
            Débouchés professionnels :
          </h3>
          <ul className="space-y-3">
            {careers.map((career, index) => (
              <li key={index} className="flex items-start">
                <button className="mr-3 flex h-8 w-8 items-center justify-center rounded bg-gray-100 text-gray-600 shadow-sm">
                  <CheckIcon className="h-5 w-5 text-primary" />
                </button>
                <span className="text-gray-600">{career}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecializationCard;
