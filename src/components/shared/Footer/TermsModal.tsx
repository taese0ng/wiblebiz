import { Term, TERMS_CLASS_ID } from "~/types/faq/terms";
import Modal from "../Modal";
import useGetTerms from "~/queries/faq/useGetTerms";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { formattingTermPeriod } from "~/utils/formattingDate";

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
}

function TermsModal({ isOpen, onClose }: Props) {
  const { data: terms = [], isFetched } = useGetTerms(
    {
      termsClassID: TERMS_CLASS_ID.JOIN_SERVICE_USE,
    },
    { enabled: isOpen },
  );

  const [selectedTerm, setSelectedTerm] = useState<Term | null>(terms[0]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedTerm = terms.find((term) => term.termsVersion === Number(e.target.value));
    setSelectedTerm(selectedTerm || null);
  };

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (isFetched) {
      setSelectedTerm(terms[0]);
    }
  }, [isFetched, terms]);

  return (
    <Modal title="이용약관" isOpen={isOpen} onClose={handleClose}>
      <ContentContainer>
        <SelectBox onChange={handleChange}>
          {terms.map((term) => (
            <option key={term.termsVersion} value={term.termsVersion}>
              {formattingTermPeriod(term.startDate, term.endDate)}
            </option>
          ))}
        </SelectBox>

        <div dangerouslySetInnerHTML={{ __html: selectedTerm?.contents ?? "" }} />
      </ContentContainer>
    </Modal>
  );
}

export default TermsModal;

const ContentContainer = styled.div``;

const SelectBox = styled.select`
  width: 100%;
  height: 38px;
  font-size: 16px;
  margin: 10px 0;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 5px;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  padding: 0 10px;
`;
