import React from "react";

interface ProgramCardProps {
  domain?: string;
  mention?: string;
  specialisation?: string;
}

const Mention: React.FC<ProgramCardProps> = ({
  domain,
  mention,
  specialisation,
}) => {
  return (
    <div
      id="program-card"
      className="bg-gray-50 pt-20 font-sans text-gray-800 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            {domain ? (
              <>
                Domaine : <span className="text-blue-600">{domain}</span>{" "}
              </>
            ) : (
              ""
            )}
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            {mention ? (
              <>
                Mention : <span className="text-blue-500">{mention}</span>
              </>
            ) : (
              ""
            )}
          </p>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            {specialisation ? (
              <>
                Spécialisation :{" "}
                <span className="text-blue-500">{specialisation}</span>
              </>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mention;
