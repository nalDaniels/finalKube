import axios from "axios";

console.log("inside api")

// axios.defaults.baseURL = 'http://fpjbackend-service:80';


export const addUser = async (data) => {
  try {
    return await axios.post(`/signup`, data);
  } catch (error) {
    console.log("Error in adding user", error);
  }
};

export const loginUser = async (data) => {
  try {
    return await axios.post(`/login`, data);
  } catch (error) {
    console.log("Error in logging in ", error);
  }
};

export const logOutUser = () => {
  try {
    return axios.get(`/logout`);
  } catch (error) {
    console.log("Error in logging out", error);
  }
};

export const addQuestion = async (data) => {
  try {
    return await axios.post(`/addQuestion`, data);
  } catch (error) {
    console.log("Error in adding question", error);
  }
};

export const updateQuestion = async (data) => {
  try {
    return await axios.post(`/updateQuestion`, data);
  } catch (error) {
    console.log("Error in updating question", error);
  }
};

export const getQuestions = () => {
  try {
    return axios.get(`/getQuestions`);
  } catch (error) {
    console.log("Error in getting questions", error);
  }
};

export const createQuiz = async (data) => {
  try {
    return await axios.post(`/createQuiz`, data);
  } catch (error) {
    console.log("Error in creating Quiz", error);
  }
};

export const getQuiz = () => {
  try {
    return axios.get(`/getQuiz`);
  } catch (error) {
    console.log("Error in getting quiz", error);
  }
};

export const getPlayQuiz = async (data) => {
  try {
    return await axios.post(`/getPlayQuiz`, data);
  } catch (error) {
    console.log("Error in getting quiz", error);
  }
};

export const checkAttempt = (data) => {
  try {
    return axios.post(`/checkAttempt`, data);
  } catch (error) {
    console.log("Error in checking attempt", error);
  }
};

export const addAttempt = (data) => {
  try {
    return axios.post(`/addAttempt`, data);
  } catch (error) {
    console.log("Error in adding Attempt", error);
  }
};

export const getResults = (data) => {
  try {
    return axios.post(`${URL}/getResults`, data);
  } catch (error) {
    console.log("Error in getting results", error);
  }
};

export const getProfile = () => {
  try {
    return axios.get(`${URL}/getProfile`);
  } catch (error) {
    console.log("Error in getting profile", error);
  }
};

export const getAttemptQuizes = () => {
  try {
    return axios.get(`/getAttemptQuizes`);
  } catch (error) {
    console.log("Error in getting attempted quizes", error);
  }
};
