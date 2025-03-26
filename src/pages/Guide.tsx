import { useEffect } from "react";

function Guide() {
  useEffect(() => {
    document.title = "차량 구독 패키지 소개 | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스";
  }, []);

  return <div>Guide</div>;
}

export default Guide;
