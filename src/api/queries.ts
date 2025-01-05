import { gql } from "@apollo/client";

export const GET_PRODUCT_CATEGORIES = gql`
  query GetProductCategories {
    productCategories(where: { hideEmpty: true, hierarchical: true }) {
      nodes {
        image {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        slug
        name
        description
      }
    }
  }
`;

export const GET_PRODUCT_CATEGORIES_SLUGS = gql`
  query GetProductCategoriesSlugs {
    productCategories(where: { hideEmpty: true, hierarchical: true }) {
      nodes {
        slug
      }
    }
  }
`;

export const GET_ON_SALE_PRODUCTS = gql`
  query GetOnSaleProducts {
    products(where: { onSale: true, typeNotIn: GROUPED }, first: 4) {
      nodes {
        name
        slug
        onSale
        image {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        ... on SimpleProduct {
          price
          salePrice
          regularPrice
        }
        ... on VariableProduct {
          price
          salePrice
          regularPrice
        }
        ... on ExternalProduct {
          price
          salePrice
          regularPrice
        }
      }
    }
  }
`;

export const GET_CATEGORY_PRODUCTS = gql`
  query GetCategoryProducts($category: String!) {
    products(where: { category: $category, typeNotIn: GROUPED }) {
      nodes {
        name
        slug
        onSale
        image {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        ... on SimpleProduct {
          price
          salePrice
          regularPrice
        }
        ... on VariableProduct {
          price
          salePrice
          regularPrice
        }
        ... on ExternalProduct {
          price
          salePrice
          regularPrice
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      databaseId
      slug
      name
      type
      description
      shortDescription(format: RAW)
      image {
        id
        sourceUrl
        altText
      }
      galleryImages {
        nodes {
          id
          sourceUrl
          altText
        }
      }
      productTags(first: 20) {
        nodes {
          id
          slug
          name
        }
      }
      productCategories(first: 20) { # Fetch product categories
        nodes {
          id
          name
          slug
        }
      }
      attributes {
        nodes {
          id
          attributeId
          ... on LocalProductAttribute {
            name
            options
            variation
          }
          ... on GlobalProductAttribute {
            name
            options
            variation
          }
        }
      }
      ... on SimpleProduct {
        onSale
        stockStatus
        price
        rawPrice: price(format: RAW)
        regularPrice
        salePrice
        stockStatus
        stockQuantity
        soldIndividually
      }
      ... on VariableProduct {
        onSale
        price
        rawPrice: price(format: RAW)
        regularPrice
        salePrice
        stockStatus
        stockQuantity
        soldIndividually
        variations(first: 50) {
          nodes {
            id
            databaseId
            name
            price
            rawPrice: price(format: RAW)
            regularPrice
            salePrice
            onSale
            attributes {
              nodes {
                name
                label
                value
              }
            }
          }
        }
      }
    }
  }`;

export const GET_ALL_PRODUCTS_SLUGS = gql`
  query GetAllProductsSlugs {
    products(where: { typeNotIn: GROUPED }, first: 100) {
      nodes {
        slug
      }
    }
  }
`;

export const GET_PRODUCTS_BY_SLUGS = gql`
  query GetProductsBySlugs($slugs: [String!]) {
    products(where: { slugIn: $slugs, orderby: { field: NAME_IN } }) {
      nodes {
        name
        slug
        onSale
        description
        image {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        ... on SimpleProduct {
          price
          salePrice
          regularPrice
        }
        ... on VariableProduct {
          price
          salePrice
          regularPrice
        }
        ... on ExternalProduct {
          price
          salePrice
          regularPrice
        }
      }
    }
  }
`;

export const GET_LATEST_PRODUCTS = gql`
  query GetLatestProducts($first: Int = 10) {
    products(where: { orderby: { field: DATE, order: DESC } }, first: $first) {
      nodes {
        name
        slug
        onSale
        image {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        ... on SimpleProduct {
          price
          salePrice
          regularPrice
          date
        }
        ... on VariableProduct {
          price
          salePrice
          regularPrice
          date
        }
        ... on ExternalProduct {
          price
          salePrice
          regularPrice
          date
        }
      }
    }
  }
`;



