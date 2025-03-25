export function formattingTermPeriod(startDate: number, endDate: number) {
  const start = new Date(startDate)
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(". ", ".")
    .replace(". ", ".")
    .slice(0, 10);

  const end = endDate
    ? new Date(endDate)
        .toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(". ", ".")
        .replace(". ", ".")
        .slice(0, 10)
    : "현재";

  return `${start} ~ ${end}`;
}
