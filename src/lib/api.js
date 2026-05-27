import axios from "axios";


const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

// Create a reusable axios instance with defaults
const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

function extractResults(response) {
  const data = response.data;
  if (data && Array.isArray(data.results)) return data.results;
  if (Array.isArray(data)) return data;
  throw new Error("Invalid API response format");
}

export async function fetchBanners() {
  try {
    const response = await apiClient.get("/api/banners/");
    const results = extractResults(response);
    if (results && Array.isArray(results)) {
      return results.map((item) => ({
        ...item,
        img: item.image_url || item.img,
        imgSmall: item.mobile_image_url || item.image_url || item.imgSmall || item.img,
      }));
    }
    return results;
  } catch (err) {
    console.warn("fetchBanners failed:", err.message);
    return null;
  }
}

export async function fetchCareers() {
  try {
    const response = await apiClient.get("/api/careers/");
    return extractResults(response);
  } catch (err) {
    console.warn("fetchCareers failed:", err.message);
    return null;
  }
}


export async function fetchEvents(cancelToken) {
  try {
    const config = cancelToken ? { cancelToken } : {};
    const response = await apiClient.get("/api/events/", config);
    return extractResults(response);
  } catch (err) {
    if (axios.isCancel(err)) throw err;
    console.warn("fetchEvents failed:", err.message);
    return null;
  }
}

export async function fetchGallery() {
  try {
    const response = await apiClient.get("/api/gallery/");
    const results = extractResults(response);
    if (results && Array.isArray(results)) {
      return results.map((item) => ({
        ...item,
        src: item.image_url || item.src,
      }));
    }
    return results;
  } catch (err) {
    console.warn(" fetchGallery failed:", err.message);
    return null;
  }
}

export async function fetchCategories() {
  try {
    const response = await apiClient.get("/api/categories/");
    return extractResults(response);
  } catch (err) {
    console.warn("fetchCategories failed:", err.message);
    return null;
  }
}

export async function fetchBikes() {
  try {
    const response = await apiClient.get("/api/motorcycles/");
    return extractResults(response);
  } catch (err) {
    console.warn("fetchBikes failed:", err.message);
    return null;
  }
}

export async function fetchBikeBySlug(slug) {
  try {
    const response = await apiClient.get(`/api/motorcycles/${slug}/`);
    return response.data;
  } catch (err) {
    console.warn(`fetchBikeBySlug(${slug}) failed:`, err.message);
    return null;
  }
}

export const fetchMotorcycles = fetchBikes;
export const fetchMotorcycleBySlug = fetchBikeBySlug;

export async function fetchColors() {
  try {
    const response = await apiClient.get("/api/colors/");
    return extractResults(response);
  } catch (err) {
    console.warn("fetchColors failed:", err.message);
    return null;
  }
}

export async function fetchTopAbout() {
  try {
    const response = await apiClient.get("/api/top-about/");
    const data = response.data;
    if (data && Array.isArray(data.results)) return data.results;
    return data;
  } catch (err) {
    console.warn("fetchTopAbout failed:", err.message);
    return null;
  }
}

export async function fetchFeatures() {
  try {
    const response = await apiClient.get("/api/features/");
    return extractResults(response);
  } catch (err) {
    console.warn("fetchFeatures failed:", err.message);
    return null;
  }
}

export { apiClient, API_BASE };
