import { ChevronRight } from "lucide-react";
import { CustomArrowProps } from "react-slick";

// Custom Next Arrow
export const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rounded-full bg-textColor"
      onClick={onClick}
    >
      <ChevronRight size={30} className="text-white hover:text-primary" />
    </div>
  );
};