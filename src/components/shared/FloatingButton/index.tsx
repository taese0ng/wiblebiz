import styled from "@emotion/styled";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import topIcon from "~/assets/ic_top.svg";

function FloatingButton() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest !== 0);
  });

  return (
    <Container>
      <AnimatedButton
        onClick={handleClickTop}
        animate={{ scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Icon src={topIcon} alt="top" />
      </AnimatedButton>
    </Container>
  );
}

export default FloatingButton;

const Container = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  right: 0;
`;

const AnimatedButton = styled(motion.button)`
  position: absolute;
  bottom: 25px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  transform-origin: center;
`;

const Icon = styled.img``;
