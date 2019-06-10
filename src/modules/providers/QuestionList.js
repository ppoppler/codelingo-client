import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

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

