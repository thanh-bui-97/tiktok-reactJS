// Đây là file chứa "công cụ" làm việc với API (axios).
// VD: get, push, cancel,...
import axios from 'axios';

// before: hard code
// axios.get('https://tiktok.fullstack.edu.vn/api/users/search', {
//   params: {
//     key1: 'value1',
//     key2: 'value2',
//   },
// })

// after config:
const httpRequest = axios.create({
  // REACT_APP_BASE_URL: là URL base được tạo từ file .env (môi trường)
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);

  return response.data;
};

export default httpRequest;
