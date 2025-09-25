import { inter700 } from "@/styles/fonts";
import SmallCourseCard from "./SmallCourseCard";
import { ApiCourseModule, CartItem } from "@/types/courses";

type SmallCourseCardsProps = {
  title: string;
  courseModules: ApiCourseModule[];
  className?: string;
  onHandleAddCard: (course: CartItem) => void;
  onHandleDeleteCard: (courseId: string) => void;
  cart: CartItem[];
};

export default function SmallCourseCards({
  title,
  courseModules,
  className,
  onHandleAddCard,
  onHandleDeleteCard,
  cart,
}: SmallCourseCardsProps) {
  return (
    <div className={className}>
      <h3
        className={`${inter700.className} mb-6 text-[23px] leading-[120%] text-[#2A354F]`}
      >
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-x-[30px] gap-y-6">
        {courseModules.map((courseModule) => (
          <SmallCourseCard
            key={courseModule.id}
            course={courseModule}
            cart={cart}
            onHandleAddCard={onHandleAddCard}
            onHandleDeleteCard={onHandleDeleteCard}
          />
        ))}
      </div>
    </div>
  );
}
