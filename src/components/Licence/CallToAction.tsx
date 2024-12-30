import Link from "next/link";

interface CallToActionProps {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  heading,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-white">{heading}</h2>
      <p className="mt-4 text-lg text-white">{description}</p>
      <Link
        href={buttonLink}
        className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-bold text-blue-500 shadow-md hover:bg-gray-100"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default CallToAction;
