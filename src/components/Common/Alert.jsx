import { useEffect, useState } from "react";
import { FaCircleExclamation as Danger } from "react-icons/fa6";

export const Alert = ({ type, message }) => {
  const [show, setShow] = useState(true);

  const baseStyle = "absolute top-0 left-1/2 -translate-x-1/2 z-50 w-[52rem] h-12 px-6 mt-4 inline-flex items-center justify-between capitalize text-base text-start font-semibold rounded-lg shadow-lg animate-hover";

  let icon;
  let alertStyle;

  if (type === "danger") {
    alertStyle = `${baseStyle} bg-red-600 text-light-50 ${show ? 'translate-y-0' : '-translate-y-24'}`;
    icon = <Danger size={24} />;
  }

  const handleAlertClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={alertStyle} role="alert">
      <div className="inline-flex items-center gap-x-4">
        {icon}
        {message}
      </div>
      <button
        onClick={handleAlertClose}
        className="animate-hover hover:text-light-200"
      >
        &times;
      </button>
    </div>
  );
};
