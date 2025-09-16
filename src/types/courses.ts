export type SmallCourse = {
  id: number;
  title: string;
  price: number;
};

export type Course = {
  id: number;
  title: string;
  description: string;
  price: number;
  categories: string[];
  tags: string[];
};

export type CartItem = Course | SmallCourse;
