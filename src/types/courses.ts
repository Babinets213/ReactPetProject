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

export type CartItem = ApiCourse;

export enum CourseComplexity {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
}

export interface ApiCourseModule {
  id: string;
  title: Record<string, string>;
  pdfFile: string | null;
  position: number;
  text: Record<string, string>;
}

export interface ApiCourse {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  shortDescription?: Record<string, string>;
  learningObjective?: Record<string, string>;
  shareableCertificate?: Record<string, string>;
  price?: number;
  duration?: Record<string, string>;
  complexity: CourseComplexity;
  standaloneModules: boolean;
  position: number;
  modules: ApiCourseModule[];
}
