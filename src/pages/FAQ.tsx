import useGetCategories from "~/queries/faq/useGetCategories";

function FAQ() {
  const { data: categories } = useGetCategories();
  console.log(categories);

  return <div>test</div>;
}

export default FAQ;
