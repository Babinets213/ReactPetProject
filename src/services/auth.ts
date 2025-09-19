import { api } from "@/lib/api-client";

// Request/Response types based on your API specification
interface SignUpRequest {
  email: string;
  password: string;
}

interface SignInRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
}

// Auth service functions using the correct API endpoints
export const authService = {
  async signUp(credentials: SignUpRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/signup", credentials);

    if (response.error) {
      throw new Error(response.error);
    }

    if (!response.data) {
      throw new Error("No data received from signup");
    }

    return response.data;
  },

  async signIn(credentials: SignInRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/signin", credentials);

    if (response.error) {
      throw new Error(response.error);
    }

    if (!response.data) {
      throw new Error("No data received from signin");
    }

    return response.data;
  },

  async logout(): Promise<void> {
    // If your API has a logout endpoint, uncomment this:
    // await api.post('/auth/logout');

    // For now, just remove local storage (handled in AuthContext)
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  },

  // Helper function to get user profile if needed
  async getProfile(token: string) {
    const response = await api.withAuth(token).get("/auth/profile");

    if (response.error) {
      throw new Error(response.error);
    }

    return response.data;
  },
};

// Export types for use in components
export type { SignUpRequest, SignInRequest, AuthResponse };
