import { useEffect } from "react";

function Counsel() {
  useEffect(() => {
    document.title = "상담문의 | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스";
  }, []);

  return <div style={{ height: "3000px" }}>Counsel</div>;
}

export default Counsel;
