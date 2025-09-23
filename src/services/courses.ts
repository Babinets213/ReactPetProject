import { api } from "@/lib/api-client";
import { ApiCourse } from "@/types/courses";

export class CoursesService {
  static async fetchPublicCourses(): Promise<ApiCourse[]> {
    const response = await api.get<ApiCourse[]>("/courses-public");
    console.log("CoursesService response:", response);
    if (response.error || !response.data) {
      throw new Error(response.error || "Failed to fetch courses");
    }
    return response.data;
  }
}
