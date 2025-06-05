import React from "react";

export default function Phone({ language }: { language?: any }) {
  console.log(language);
  const lang = language === "fr" ? <Fr /> : <En />;

  return lang;
}
const Fr = () => {
  return (
    <div className="mx-auto my-10 max-w-3xl   p-6 ">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 md:text-3xl">
        📞 Pour mieux vous accompagner
      </h2>
      <p className="mb-8 text-center text-gray-600">
        L&apos;Université{" "}
        <span className="font-semibold text-blue-600">E-MEDIA</span> met en
        place des lignes dédiées :
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4 transition hover:bg-blue-50">
          <div className="text-xl text-blue-600">🏫</div>
          <div>
            <p className="font-medium text-gray-800">Présentiel</p>
            <p className="text-sm text-gray-600">+261 38 98 777 37</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4 transition hover:bg-blue-50">
          <div className="text-xl text-blue-600">💻</div>
          <div>
            <p className="font-medium text-gray-800">En ligne</p>
            <p className="text-sm text-gray-600">+261 38 98 777 37</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4 transition hover:bg-blue-50">
          <div className="text-xl text-blue-600">📚</div>
          <div>
            <p className="font-medium text-gray-800">
              Modulaire & professionnel
            </p>
            <p className="text-sm text-gray-600">+261 38 78 777 37</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4 transition hover:bg-blue-50">
          <div className="text-xl text-blue-600">🇲🇺</div>
          <div>
            <p className="font-medium text-gray-800">Île Maurice</p>
            <p className="text-sm text-gray-600">+230 5 488-4377</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const En = () => {
  return (
    <div className="mx-auto my-10 max-w-3xl rounded-2xl  p-6  md:p-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 md:text-3xl">
        📞 To better assist you
      </h2>
      <p className="mb-8 text-center text-gray-600">
        <span className="font-semibold text-blue-600">E-MEDIA University</span>{" "}
        has set up dedicated lines:
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4 transition hover:bg-blue-50">
          <div className="text-xl text-blue-600">🏫</div>
          <div>
            <p className="font-medium text-gray-800">On-campus</p>
            <p className="text-sm text-gray-600">+261 38 08 777 37</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4 transition hover:bg-blue-50">
          <div className="text-xl text-blue-600">💻</div>
          <div>
            <p className="font-medium text-gray-800">Online</p>
            <p className="text-sm text-gray-600">+261 38 08 777 37</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4 transition hover:bg-blue-50">
          <div className="text-xl text-blue-600">📚</div>
          <div>
            <p className="font-medium text-gray-800">Modular & Professional</p>
            <p className="text-sm text-gray-600">+261 38 78 777 37</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4 transition hover:bg-blue-50">
          <div className="text-xl text-blue-600">🇲🇺</div>
          <div>
            <p className="font-medium text-gray-800">Mauritius</p>
            <p className="text-sm text-gray-600">+230 5 488-4377</p>
          </div>
        </div>
      </div>
    </div>
  );
};
