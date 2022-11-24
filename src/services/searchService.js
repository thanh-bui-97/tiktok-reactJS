// Đây là file chứa dịch vụ với API cụ thể theo yêu cầu task.
// VD: tìm kiếm theo tên, update comments...
// Until
import * as httpRequest from '~/untils/httpRequest'; //call API wtth axios

export async function search(q, type = 'less') {
  //q:query,
  // xử lý lối của async/await the same then/catch: bỏ code vào trong try/catch
  try {
    const res = await httpRequest.get('users/search', {
      // .get('path after baseURL')
      params: {
        q,
        type,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
