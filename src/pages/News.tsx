import { useEffect } from "react";

function News() {
  useEffect(() => {
    document.title = "NEWS | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스";
  }, []);

  return <div>News</div>;
}

export default News;
