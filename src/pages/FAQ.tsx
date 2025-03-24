import useGetFaqList from "~queries/faq/useGetFaqList";

function FAQ() {
  const { data } = useGetFaqList();
  console.log(data);

  return <div>test</div>;
}

export default FAQ;
