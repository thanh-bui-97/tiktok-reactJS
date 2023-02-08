// Đây là file chứa dịch vụ với API cụ thể theo yêu cầu task.
// VD: tìm kiếm theo tên, update comments...
// Until
import * as httpRequest from '~/untils/httpRequest'; //call API wtth axios

// export const controller = new AbortController();
export async function getVideos(type = 'for-you', page = '1', except = null) {
  try {
    const res = await httpRequest.get('videos', {
      //chú ý giữ nguyên trạng thái ký tự của URL
      params: {
        // type: "for-you" or "following". for-you: Lấy danh sách posts dành cho bạn. following: Lấy danh sách posts của những người bạn đang theo dõi
        type,
        // page: Dùng để tải thêm dữ liệu posts. VD: Khi ở trang 1 sẽ tải 10 posts đầu, sang trang 2 sẽ tải thêm 10 posts tiếp theo
        page,
        // except: UID của video sẽ bị loại trừ khỏi kết quả
        except,
      },
      // signal: controller.signal,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
