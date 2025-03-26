import processIcon1 from "~/assets/ic_process01.svg";
import processIcon2 from "~/assets/ic_process02.svg";
import processIcon3 from "~/assets/ic_process03.svg";
import processIcon4 from "~/assets/ic_process04.svg";

export const PROCESS_INFO_CONTENTS = [
  {
    id: "inquiry",
    icon: processIcon1,
    title: "문의 등록",
    description: "상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.",
  },
  {
    id: "admin-setting",
    icon: processIcon2,
    title: "관리자 설정",
    description: "관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.",
  },
  {
    id: "employee-signup",
    icon: processIcon3,
    title: "임직원 가입",
    description: "사용자 App에서 회원가입 후 소속회사 인증을 진행합니다.",
  },
  {
    id: "service-use",
    icon: processIcon4,
    title: "서비스 이용",
    description: "사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!",
  },
];
