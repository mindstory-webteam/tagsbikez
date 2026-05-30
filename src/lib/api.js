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

async function fetchAllPaginated(endpoint, config = {}) {
  let allResults = [];
  let url = endpoint;
  const baseUrlPath = endpoint.split('?')[0];

  while (url) {
    const response = await apiClient.get(url, config);
    const data = response.data;
    
    if (data && Array.isArray(data.results)) {
      allResults = [...allResults, ...data.results];
      if (data.next) {
        const qs = data.next.split('?')[1];
        url = qs ? `${baseUrlPath}?${qs}` : null;
      } else {
        url = null;
      }
    } else if (Array.isArray(data)) {
      allResults = [...allResults, ...data];
      url = null;
    } else {
      break;
    }
  }
  return allResults;
}

export async function fetchBanners() {
  try {
    const results = await fetchAllPaginated("/api/banners/");
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
    return await fetchAllPaginated("/api/careers/");
  } catch (err) {
    console.warn("fetchCareers failed:", err.message);
    return null;
  }
}


export async function fetchEvents(cancelToken) {
  try {
    const config = cancelToken ? { cancelToken } : {};
    return await fetchAllPaginated("/api/events/", config);
  } catch (err) {
    if (axios.isCancel(err)) throw err;
    console.warn("fetchEvents failed:", err.message);
    return null;
  }
}

export async function fetchGallery() {
  try {
    const results = await fetchAllPaginated("/api/gallery/");
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
    return await fetchAllPaginated("/api/categories/");
  } catch (err) {
    console.warn("fetchCategories failed:", err.message);
    return null;
  }
}

export async function fetchBikes() {
  try {
    return await fetchAllPaginated("/api/motorcycles/");
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
    return await fetchAllPaginated("/api/colors/");
  } catch (err) {
    console.warn("fetchColors failed:", err.message);
    return null;
  }
}

export async function fetchTopAbout() {
  try {
    return await fetchAllPaginated("/api/top-about/");
  } catch (err) {
    console.warn("fetchTopAbout failed:", err.message);
    return null;
  }
}

export async function fetchFeatures() {
  try {
    return await fetchAllPaginated("/api/features/");
  } catch (err) {
    console.warn("fetchFeatures failed:", err.message);
    return null;
  }
}

export { apiClient, API_BASE };
