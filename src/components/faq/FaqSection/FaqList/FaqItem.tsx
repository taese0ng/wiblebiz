import styled from "@emotion/styled";
import { Item } from "~/types/faq/faq";
import ArrowIcon from "~/assets/ic_arrow.svg";
import { AnimatePresence, motion } from "framer-motion";

const QUESTION_HEIGHT = 72;

interface Props {
  faq: Item;
  isOpen: boolean;
  onClick: (faqId: number) => void;
  skipAnimation?: boolean;
  showCategoryName?: boolean;
}

function FaqItem({ faq, isOpen, onClick, skipAnimation, showCategoryName = false }: Props) {
  const { id, answer, subCategoryName, question, categoryName } = faq;
  const handleClick = () => {
    onClick(id);
  };

  return (
    <AnimatePresence>
      <Container
        isOpen={isOpen}
        initial="collapsed"
        animate={isOpen ? "expanded" : "collapsed"}
        variants={{
          collapsed: { height: QUESTION_HEIGHT },
          expanded: { height: "auto" },
        }}
        transition={
          skipAnimation
            ? {
                duration: 0,
              }
            : {
                duration: 0.6,
                ease: [0.6, 0, 0.3, 1],
              }
        }
      >
        <Question onClick={handleClick}>
          {showCategoryName && <CategoryName>{categoryName}</CategoryName>}
          <CategoryName>{subCategoryName}</CategoryName>
          <QuestionText>{question}</QuestionText>

          <Icon
            src={ArrowIcon}
            alt="arrow"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={
              skipAnimation
                ? {
                    duration: 0,
                  }
                : {
                    duration: 0.6,
                    ease: [0.6, 0, 0.3, 1],
                  }
            }
          />
        </Question>

        <Answer>
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </Answer>
      </Container>{" "}
    </AnimatePresence>
  );
}

export default FaqItem;

const Container = styled(motion.li)<{ isOpen: boolean }>`
  width: 100%;
  background-color: ${({ isOpen, theme: { colors } }) => (isOpen ? colors.gray10 : "transparent")};
  padding-bottom: ${({ isOpen }) => (isOpen ? "10px" : "0")};
  overflow: hidden;
`;

const Question = styled.button`
  width: 100%;
  height: ${QUESTION_HEIGHT}px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  padding: 24px 0;
  background-color: transparent;
`;

const CategoryName = styled.em`
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.gray400};
  padding: 0 24px;
  font-weight: 600;
  width: 8em;
  text-align: center;
`;

const QuestionText = styled.strong`
  font-size: 20px;
  color: ${({ theme: { colors } }) => colors.midnight900};
  padding: 0 24px;
  flex: 1;
  text-align: left;
`;

const Answer = styled.div`
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.midnight900};
  background-color: ${({ theme: { colors } }) => colors.white};
  padding: 24px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray100};
  border-top: 1px solid ${({ theme: { colors } }) => colors.gray100};
`;

const Icon = styled(motion.img)`
  width: 24px;
  height: 24px;
  padding: 0 24px;
`;
