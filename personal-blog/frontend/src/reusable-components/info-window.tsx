import { useState } from "react";
interface InformationWindowProps {
  isOpen: boolean;
  isClosed: () => void;
  isMinimized: () => void;
  title: string;
  description: string;
}

const InformationWindow: React.FC<InformationWindowProps> = ({
  isOpen,
  isClosed,
  isMinimized,
  title,
  description,
}) => {
  const [minimized, setIsMinimized] = useState(false);

  const handleClose = () => {
    setIsMinimized(false);
    isClosed();
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    isMinimized();
  };

  if (!isOpen && !isMinimized) return null;

  return (
    <div className="InformationWindow">
      <div className="InformationWindowContent">
        <div className="InformationWindowHeader">
          <div className="InformationWindowButtons">
            <button onClick={handleMinimize}></button>
            <button onClick={handleClose}></button>
          </div>
          <h2 className="InformationWindowTitle">{title}</h2>
        </div>
        <p className="InformationWindowDescription">{description}</p>
      </div>
    </div>
  );
};

export default InformationWindow;
