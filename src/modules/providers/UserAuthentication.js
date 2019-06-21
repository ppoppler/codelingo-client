import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

export const LOGIN_USER = gql`
  mutation {
    loginUser(input: { email: $email, password: $password }) {
      token
    }
  }
`;
