import { Router } from 'express';
import { fetchImages } from '../services/pixabay.service.js';

const router = Router();

/**
 * GET /api/images
 * Query params:
 *   - category: string (mapped to "q" in Pixabay)
 *   - page: number (default 1)
 *   - perPage: number (default 9)
 *   - sortBy: "id" | "date"
 *   - order: "asc" | "desc"
 *
 * Returns a normalized JSON with pagination and items
 */
router.get('/', async (req, res) => {
  try {
    const { category, page, perPage, sortBy, order } = req.query;
    const result = await fetchImages({
      q: category || 'sports',
      page: Number(page) || 1,
      perPage: Number(perPage) || 9,
      sortBy: sortBy || 'id',
      order: order || 'desc'
    });
    res.json(result);
  } catch (err) {
    console.error('Error in /api/images:', err.message);
    res.status(500).json({ message: 'Failed to fetch images', error: err.message });
  }
});

export default router;
