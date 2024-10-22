import { ChevronLeft } from "lucide-react";
import { CustomArrowProps } from "react-slick";


export const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
      <div
        className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-secondary rounded-full"
        onClick={onClick}
      >
        <ChevronLeft size={30} className="text-white hover:text-primary" />
      </div>
    );
  };