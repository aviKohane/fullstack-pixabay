import axios from 'axios';

const API = 'https://pixabay.com/api/';
const KEY = process.env.PIXABAY_KEY;

/**
 * Call Pixabay API and return a normalized response.
 * Supports pagination and simple sorting.
 * Pixabay does not provide a reliable "date" field, so we fallback to sorting by id.
 */
export async function fetchImages({ q = 'sports', page = 1, perPage = 9, sortBy = 'id', order = 'desc' }) {
  if (!KEY) throw new Error('Missing PIXABAY_KEY in environment');

  const params = {
    key: KEY,
    q,
    image_type: 'photo',
    safesearch: true,
    per_page: Math.min(Math.max(perPage, 1), 200),
    page: Math.max(page, 1)
  };

  const { data } = await axios.get(API, { params });
  const hits = Array.isArray(data?.hits) ? data.hits : [];

  // Sorting fallback: if "date" is requested, we fallback to "id"
  const normalizedSort = sortBy === 'date' ? 'id' : sortBy;
  hits.sort((a, b) => {
    const A = a[normalizedSort] ?? 0;
    const B = b[normalizedSort] ?? 0;
    return order === 'asc' ? A - B : B - A;
  });

  return {
    total: data?.totalHits ?? 0,
    page: params.page,
    perPage: params.per_page,
    q,
    sortBy: normalizedSort,
    order,
    items: hits.map(h => ({
      id: h.id,
      previewURL: h.previewURL,
      webformatURL: h.webformatURL,
      largeImageURL: h.largeImageURL,
      tags: h.tags,
      views: h.views,
      downloads: h.downloads,
      collections: h.collections,
      likes: h.likes,
      user: h.user
    }))
  };
}
