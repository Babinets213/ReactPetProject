import { inter700 } from "@/styles/fonts";
import SmallCourseCard from "./SmallCourseCard";
import { Course } from "@/app/[locale]/courses/page";

export type SmallCourse = {
  id: number;
  title: string;
  price: number;
};

type SmallCourseCardsProps = {
  title: string;
  courses: SmallCourse[];
  className?: string;
  onHandleAddCard: (course: SmallCourse) => void;
  onHandleDeleteCard: (courseId: number) => void;
  cart: (Course | SmallCourse)[];
};

export default function SmallCourseCards({
  title,
  courses,
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
        {courses.map((course) => (
          <SmallCourseCard
            key={course.id}
            course={course}
            cart={cart}
            onHandleAddCard={onHandleAddCard}
            onHandleDeleteCard={onHandleDeleteCard}
          />
        ))}
      </div>
    </div>
  );
}
