import axios from 'axios';

export const postCourse =  (token,courseData, url) => {
  const config = {
      headers: { Authorization: `basic ${token}` }
  };
  return  axios.post(
      `${process.env.REACT_APP_API}/${url}`,
      courseData,
      config
      );
};

export const deleteCourseByID =  (token, url) => {
  const config = {
      headers: {
        Authorization: `basic ${token}`,
    }
  };
  return  axios.delete(
      `${process.env.REACT_APP_API}/${url}`,
      {},
      config,
      );
};

  export const getListCourses =  (token, url) => {
    const config = {
        headers: { Authorization: `basic ${token}` }
    };
    return  axios.get(
        `${process.env.REACT_APP_API}/${url}`,
        config
        );
  };


  export const getCourse =  (token, url) => {
    const config = {
        headers: { Authorization: `basic ${token}` }
    };
    return  axios.get(
        `${process.env.REACT_APP_API}/${url}`,
        config
        );
  };