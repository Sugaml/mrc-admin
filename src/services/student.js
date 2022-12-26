import axios from 'axios';

 export const postStuInfo =  (token,studentInfoData, url) => {
    const config = {
        headers: { Authorization: `basic ${token}` }
    };
    return  axios.post(
        `${process.env.REACT_APP_API}/${url}`,
        studentInfoData,
        config
        );
  };

  export const getCurrentAddress = (token, url) => {
    const config = {
        headers: { Authorization: `basic ${token}` }
    };
        return axios.get(
            `${process.env.REACT_APP_API}/${url}`,
            config
            );
    };

  export const postStudentAddressInfo =  (studentAddressInfoData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, studentAddressInfoData);
  };

  export const postStudentEducationInfo =  (studentEducationInfoData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, studentEducationInfoData);
  };

  export const postStudentFileInfo =  (studentFileInfoData, url) => {
    return  axios.post(`${process.env.REACT_APP_API}/${url}`, studentFileInfoData);
  };

  export const getStudents = (token, url) => {
    const config = {
        headers: { Authorization: `basic ${token}` }
    };
        return axios.get(
            `${process.env.REACT_APP_API}/${url}`,
            config
            );
};

export const updateStudentStatus = (token, url,statusData) => {
  const config = {
      headers: { Authorization: `basic ${token}` }
  };
      return axios.put(
          `${process.env.REACT_APP_API}/${url}`,
          statusData,
          config,
          );
};