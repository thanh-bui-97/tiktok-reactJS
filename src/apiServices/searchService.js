// Until
import * as request from '~/untils/request'; //call API wtth axios

export async function search(q, type = 'less') {
  // xử lý lối của async/await the same then/catch: bỏ code vào trong try/catch
  try {
    const res = await request.get('users/search', {
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
