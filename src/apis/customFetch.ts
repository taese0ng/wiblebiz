type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: HeadersInit;
  body?: unknown;
  params?: Record<string, string>;
};

/**
 * 커스텀 Fetch 함수
 * @param url API 엔드포인트
 * @param options 요청 옵션 (메소드, 헤더, 바디, 쿼리 파라미터)
 * @returns 처리된 응답 데이터
 */
export const customFetch = async <T>(url: string, options: RequestOptions = {}): Promise<T> => {
  const { method = "GET", headers = {}, body, params } = options;

  // URL에 쿼리 파라미터 추가
  const queryParams = params ? `?${new URLSearchParams(params).toString()}` : "";

  const fullUrl = `${url}${queryParams}`;

  // 기본 헤더 설정
  const defaultHeaders = {
    "Content-Type": "application/json",
    // 필요한 경우 인증 토큰 추가
    // 'Authorization': `Bearer ${getToken()}`,
  };

  try {
    const response = await fetch(fullUrl, {
      method,
      headers: { ...defaultHeaders, ...headers },
      body: body ? JSON.stringify(body) : undefined,
    });

    // 응답 확인
    if (!response.ok) {
      throw new Error(`API 호출 오류: ${response.statusText}`);
    }

    // JSON 응답 파싱
    try {
      const data = await response.json();
      return data as T;
    } catch (error: unknown) {
      const jsonError = error instanceof Error ? error : new Error(String(error));
      throw new Error(`JSON 파싱 오류: ${jsonError.message}`);
    }
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
};
