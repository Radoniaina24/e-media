import { CheckCircleIcon } from "@heroicons/react/solid"; // Import Heroicons
interface Program {
  categorie: string;
  details: string[];
}
const ProgramCardCfp: React.FC<{ program: Program }> = ({ program }) => {
  return (
    <div className="flex flex-col items-stretch justify-between rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:cursor-pointer hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
      <h3 className="text-center text-xl font-semibold text-primary dark:text-primary">
        {program.categorie}
      </h3>

      {/* Liste avec icône de point Heroicons */}
      <ul className="mt-4 space-y-2 text-center text-gray-600 dark:text-gray-200">
        {program.details?.map((detail, index) => (
          <li key={index} className="flex ">
            {/* Icône de point Heroicons */}
            <div>
              <CheckCircleIcon className="mr-2 h-5 w-5 text-blue-500" />
            </div>
            <div className="text-start">{detail}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramCardCfp;
