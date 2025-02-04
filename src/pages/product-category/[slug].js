import { GetStaticProps, GetStaticPaths } from "next";
import apolloClient from "lib/apolloClient";
import {
  GET_CATEGORY_PRODUCTS,
  GET_PRODUCT_CATEGORIES_SLUGS
} from "api/queries";
import ProductList from "components/ProductList/ProductList";
import MetaHead from "components/MetaHead";

const Category = ({ products, slug }) => {
  return (
    <>
      {slug && (
        <MetaHead
          title={`React WooCommerce | ${slug.replace(/\b\w/g, (l) =>
            l.toUpperCase()
          )}`}
          description={`React WooCommerce ${slug.replace(/\b\w/g, (l) =>
            l.toUpperCase()
          )}`}
        />
      )}
      <div>
        <h1 className="main-heading capitalize">{slug}</h1>
        {products && <ProductList products={products} />}
      </div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: GET_CATEGORY_PRODUCTS,
    variables: { category: params?.slug }
  });

  return {
    props: { products: data?.products?.nodes, slug: params?.slug },
    revalidate: 100
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: GET_PRODUCT_CATEGORIES_SLUGS
  });

  const paths = data?.productCategories?.nodes?.map(
    (category) => ({
      params: { slug: category.slug }
    })
  );

  return {
    paths,
    fallback: true
  };
};

export default Category;
