type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface ApiOptions {
  method?: HttpMethod;
  body?: object | FormData;
  headers?: Record<string, string>;
}

interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  status: number;
}

class ApiClient {
  private baseUrl: string;

  constructor() {
    // Use /api directly - Next.js rewrites will handle the proxying
    this.baseUrl = "/api";
  }

  private async makeRequest<T>(
    endpoint: string,
    options: ApiOptions = {},
  ): Promise<ApiResponse<T>> {
    const { method = "GET", body, headers = {} } = options;

    const config: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (body && !(body instanceof FormData)) {
      config.body = JSON.stringify(body);
    } else if (body instanceof FormData) {
      // Remove Content-Type for FormData to let browser set it with boundary
      delete (config.headers as Record<string, string>)["Content-Type"];
      config.body = body;
    }

    try {
      const url = `${this.baseUrl}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
      const response = await fetch(url, config);

      let data: T | undefined;
      const contentType = response.headers.get("content-type");

      if (contentType?.includes("application/json")) {
        data = await response.json();
      } else {
        data = (await response.text()) as unknown as T;
      }

      if (!response.ok) {
        return {
          error: `HTTP ${response.status}: ${response.statusText}`,
          status: response.status,
        };
      }

      return {
        data,
        status: response.status,
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Network error",
        status: 0,
      };
    }
  }

  // Convenience methods
  async get<T>(
    endpoint: string,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { method: "GET", headers });
  }

  async post<T>(
    endpoint: string,
    body?: object | FormData,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { method: "POST", body, headers });
  }

  async put<T>(
    endpoint: string,
    body?: object | FormData,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { method: "PUT", body, headers });
  }

  async patch<T>(
    endpoint: string,
    body?: object | FormData,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { method: "PATCH", body, headers });
  }

  async delete<T>(
    endpoint: string,
    headers?: Record<string, string>,
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { method: "DELETE", headers });
  }

  // Method to add authorization header
  withAuth(token: string) {
    return {
      get: <T>(endpoint: string) =>
        this.get<T>(endpoint, { Authorization: `Bearer ${token}` }),
      post: <T>(endpoint: string, body?: object | FormData) =>
        this.post<T>(endpoint, body, { Authorization: `Bearer ${token}` }),
      put: <T>(endpoint: string, body?: object | FormData) =>
        this.put<T>(endpoint, body, { Authorization: `Bearer ${token}` }),
      patch: <T>(endpoint: string, body?: object | FormData) =>
        this.patch<T>(endpoint, body, { Authorization: `Bearer ${token}` }),
      delete: <T>(endpoint: string) =>
        this.delete<T>(endpoint, { Authorization: `Bearer ${token}` }),
    };
  }
}

// Export singleton instance
export const api = new ApiClient();

// Export types for use in other files
export type { ApiResponse, HttpMethod };
