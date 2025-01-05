import apolloClient from "lib/apolloClient";
import ProductList from "components/ProductList/ProductList";
import MetaHead from "components/MetaHead";
import { GET_LATEST_PRODUCTS } from "api/queries";

const Home = ({ Products }) => {
  return (
    <>
      <MetaHead
        title="پارس قائم"
        description="پروژه بزرگ که خدا برسه به دادمون"
      />

      {Products && <ProductList products={Products} />}
    </>
  );
};

export const getStaticProps = async () => {
  const { data: ProductsData, error } = await apolloClient.query({
    query: GET_LATEST_PRODUCTS,
  });

  return {
    props: {
      Products: ProductsData?.products?.nodes,
    },
    revalidate: 100,
  };
};

export default Home;
