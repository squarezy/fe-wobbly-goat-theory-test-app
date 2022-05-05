import axios from "axios";
const { API_URL } = require("../config");

const theoryTestApi = axios.create({
  baseURL: API_URL,
});

export const getQuestionByID = (id) => {
  return theoryTestApi.get(`/question/${id}`).then(({ data }) => {
    return data;
  });
};  

export const getNewTest = (email, password, type_id, categories) => {
  return theoryTestApi
    .post("/test/create", {
      email: email,
      password: password,
      type_id: type_id,
      categories: categories,
    })
    .then(({ data }) => {
      return data;
    });
};

export const getCategories = () => {
  return theoryTestApi.get(`/categories`).then(({ data }) => {
    return data;
  });
};

export const sendAnswer = (quizId, email, password, user_answer_number) => {
  return theoryTestApi
    .post(`/test/update/${quizId}`, {
      email: email,
      password: password,
      user_answer_number: user_answer_number,
    })
    .then(({ data }) => {
      return data;
    });
};
