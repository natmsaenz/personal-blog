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
    const [isMinimized, setIsMinimized] = useState(false)
};
