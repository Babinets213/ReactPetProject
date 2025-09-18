import { api } from "@/lib/api-client";

export interface UserProfile {
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthDate: string | null;
  jobTitle: string;
  firmNumber: string | null;
  education: string | null;
  languages: string[] | null;
  experienceDuration: string;
  companyName: string;
  position: string | null;
  address: string | null;
  user?: {
    id: string;
    email: string;
    role: string;
  };
  // Computed field for easier access
  email?: string;
}

// Helper function to get auth token from localStorage
const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("accessToken");
};

export const profileService = {
  /**
   * Fetch user profile data
   */
  async getProfile(): Promise<UserProfile> {
    const token = getAuthToken();
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await api.withAuth(token).get<UserProfile>("/profile");
    if (response.data) {
      // Add email as a computed field from nested user object
      const profileData = {
        ...response.data,
        email: response.data.user?.email || "",
      };
      return profileData;
    }
    throw new Error(response.error || "Failed to fetch profile");
  },

  /**
   * Update user profile
   */
  async updateProfile(data: Partial<UserProfile>): Promise<UserProfile> {
    const token = getAuthToken();
    if (!token) {
      throw new Error("No authentication token found");
    }

    // Remove email from update data as it's read-only
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { email, user, id, ...updateData } = data;

    // Format birthDate to ISO 8601 if provided, or set to null if empty
    if (updateData.birthDate !== undefined) {
      if (updateData.birthDate === "" || updateData.birthDate === null) {
        updateData.birthDate = null;
      } else if (updateData.birthDate && !updateData.birthDate.includes("T")) {
        // If birthDate is in YYYY-MM-DD format, convert to ISO 8601
        updateData.birthDate = `${updateData.birthDate}T00:00:00.000Z`;
      }
    }

    const response = await api
      .withAuth(token)
      .patch<UserProfile>("/profile", updateData);
    if (response.data) {
      // Add email back to response for consistency
      const profileData = {
        ...response.data,
        email: response.data.user?.email || "",
      };
      return profileData;
    }
    throw new Error(response.error || "Failed to update profile");
  },
};
