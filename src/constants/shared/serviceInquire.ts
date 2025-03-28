import downloadIcon from "~/assets/ic_download.svg";
import talkIcon from "~/assets/ic_talk.svg";
import writeIcon from "~/assets/ic_write.svg";

interface Content {
  icon: string;
  text: string;
  id: string;
  href: string;
  download?: string;
  target?: string;
  subText?: string;
}

export const SERVICE_INQUIRE_CONTENTS: Content[] = [
  {
    icon: downloadIcon,
    text: "상품제안서 다운로드",
    id: "download-inquiry",
    href: "/public/downloads/proposal.604393960f70e45463b6.pdf",
    download: "위블비즈 상품제안서",
  },
  {
    icon: writeIcon,
    text: "상담문의 등록하기",
    id: "consultation-inquiry",
    href: "/Counsel",
  },
  {
    icon: talkIcon,
    text: "카톡으로 문의하기",
    subText: "ID: Wible Biz(위블 비즈)",
    id: "kakao-inquiry",
    href: "https://pf.kakao.com/_xfLxjdb",
    target: "_blank",
  },
];
