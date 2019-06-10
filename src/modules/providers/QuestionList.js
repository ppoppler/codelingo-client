import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

/**
 * GraphQL query that receives all the questions by module
 */
export const GET_PYTHON_ANSWERS = gql`
  {
    getQuestionsByModule(input: { language: "python", lesson: "keywords" }) {
      question
      type
      answers
      correctAnswer
      lesson
    }
  }
`;

/**
 * Decorator Component class that contains the query data from GraphQL
 * @param {Component} Component React component that contains the loading and data properties
 */
const withPythonAnswers = Component => (props) => {
    return ( 
        <Query query = {GET_PYTHON_ANSWERS}>
            {({loading,data}) => { 
                return (
                    <Component loading= {loading} questions ={data && data.getQuestionsByModule} {...props} />
                );
            }}
        </Query>
    );
};

export default withPythonAnswers;

