import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Allow overriding the API base via env (optional for later)
const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async ({ category = "sports", page = 1, perPage = 9 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${API}/api/images`, { params: { category, page, perPage } });
      return data;
    } catch (e) {
      return rejectWithValue(e?.response?.data?.message || e.message || "Network error");
    }
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    items: [],
    total: 0,
    page: 1,
    perPage: 9,
    category: "sports",
    status: "idle",
    error: null,
    selected: null,
    showCategoryModal: false,
    showDetailsModal: false,
  },
  reducers: {
    openCategoryModal: (s) => { s.showCategoryModal = true; },
    closeCategoryModal: (s) => { s.showCategoryModal = false; },
    openDetailsModal: (s, a) => { s.selected = a.payload; s.showDetailsModal = true; },
    closeDetailsModal: (s) => { s.showDetailsModal = false; s.selected = null; },
  },
  extraReducers: (b) => {
    b.addCase(fetchImages.pending, (s) => { s.status = "loading"; s.error = null; })
     .addCase(fetchImages.fulfilled, (s, a) => {
       s.status = "succeeded";
       const { items, total, page, perPage, q } = a.payload;
       s.items = items || [];
       s.total = total ?? 0;
       s.page = page ?? 1;
       s.perPage = perPage ?? 9;
       s.category = q || s.category;
     })
     .addCase(fetchImages.rejected, (s, a) => { s.status = "failed"; s.error = a.payload || "Request failed"; });
  }
});

export const { openCategoryModal, closeCategoryModal, openDetailsModal, closeDetailsModal } = imagesSlice.actions;
export default imagesSlice.reducer;
