"use server"

export const baseApi = async (url: string, method: 'GET' | 'POST', body:object|null = null, params = {}) => {
    const options: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (method === "POST" && body) {
        options.body = JSON.stringify(body);
    }

    // Tạo chuỗi truy vấn từ params
    const queryString = Object.keys(params).length > 0 ? `?${new URLSearchParams(params)}` : '';

    try {
        const response = await fetch(`https://66656af6d122c2868e409b34.mockapi.io/${url}${queryString}`, options);
        
        // Kiểm tra phản hồi
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error; // Ném lỗi để có thể xử lý ở cấp cao hơn
    }
};

export const get = async (url: string, params = {}) => {
    return baseApi(url, "GET", null, params);
};

export const post = async (url: string, body:Object) => {
    return baseApi(url, "POST", body);
};