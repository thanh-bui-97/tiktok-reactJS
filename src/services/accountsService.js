// Đây là file chứa dịch vụ với API cụ thể theo yêu cầu task.
// VD: tìm kiếm theo tên, update comments...
// Until
import * as httpRequest from '~/untils/httpRequest'; //call API wtth axios

export const controller = new AbortController();
export async function getSuggestedAccounts(page = 1, except = [], per_page) {
  try {
    const res = await httpRequest.get('users/suggested', {
      //chú ý giữ nguyên trạng thái ký tự của URL
      params: {
        // page: Số trang. VD trang 1 tải 5 users thì trang 2 sẽ tải thêm 5 users tiếp theo
        page,
        // except: Danh sách id sẽ bị loại trừ khỏi response, phân cách các id bằng dấu phẩy. VD: 1,2,3,4
        except: except.join(),
        // per_page: Số lượng trả về trên một trang
        per_page,
      },
      signal: controller.signal,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getFollowingAccounts(page = 1, except = []) {
  try {
    const res = await httpRequest.get('me/followings', {
      //chú ý giữ nguyên trạng thái ký tự của URL
      params: {
        // page: Số trang. VD trang 1 tải 5 users thì trang 2 sẽ tải thêm 5 users tiếp theo
        page,
        // except: Danh sách id sẽ bị loại trừ khỏi response, phân cách các id bằng dấu phẩy. VD: 1,2,3,4
        except: except.join(),
      },
      signal: controller.signal,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
