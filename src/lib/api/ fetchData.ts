type FetchOptions = RequestInit & {
  baseUrl?: string;
  params?: Record<string, string>;
};

export async function fetchData<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    baseUrl = process.env.API_BASE_URL ||
      "https://jsonplaceholder.typicode.com",
    params,
    ...restOptions
  } = options;

  // Формируем URL с параметрами
  const url = new URL(endpoint, baseUrl);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const res = await fetch(url.toString(), {
    ...restOptions,
    headers: {
      "Content-Type": "application/json",
      ...restOptions.headers,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Request failed with status ${res.status}`
    );
  }

  return res.json();
}
