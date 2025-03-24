import { http, HttpResponse } from "msw";

export const handlers = [
  // GET 요청 예시
  http.get("/api/example", () => {
    return HttpResponse.json({
      message: "This is a mocked response",
      timestamp: new Date().toISOString(),
    });
  }),

  // POST 요청 예시
  http.post("/api/example", async ({ request }) => {
    const data = await request.json();
    return HttpResponse.json({
      message: "Data received",
      data,
      timestamp: new Date().toISOString(),
    });
  }),
];
