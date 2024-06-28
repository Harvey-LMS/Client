export { apiGet, apiPost, apiPut, apiPatch };

const api = async (
  url: string,
  method: string = "GET",
  data?: any,
  param: RequestInit = {}
) => {
  const headers = { ...param.headers, "Content-Type": "application/json" };
  const body = data ? JSON.stringify(data) : undefined;

    try {
        const response = await fetch(`https://66656af6d122c2868e409b34.mockapi.io/${url}`, {
            method,
            headers,
            body,
            ...param // Sử dụng spread operator để tích hợp các tùy chọn từ param
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error; // Rethrow để có thể xử lý lỗi bên ngoài nếu cần
    }
};

// Lấy dữ liệu từ server.
const apiGet = async (url: string, param: RequestInit) => {
  return api(url, "GET", undefined, param);
};

// Thêm dữ liệu mới lên server.
const apiPost = async (url: string, data: any) => {
  return api(url, "POST", data);
};

// Cập nhật toàn bộ dữ liệu hiện có trên server.
const apiPut = async (url: string, data: any) => {
  return api(url, "PUT", data);
};
// Cập nhật một phần dữ liệu hiện có trên server.
const apiPatch = async (url: string, data: any) => {
  return api(url, "PATCH", data);
};
