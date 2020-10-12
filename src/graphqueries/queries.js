import { gql } from "apollo-boost";

export const GET_PRODUCTS = gql `
  {
    products {
      id
      name
      price
      stock
    }
  }
`;

export const GET_USERS = gql `
  {
    users {
      id
      username
      email
    }
  }
`;
