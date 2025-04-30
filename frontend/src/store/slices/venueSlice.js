import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const fetchVenues = createAsyncThunk(
  'venues/fetchVenues',
  async (filters, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/venues`, { params: filters });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchVenueById = createAsyncThunk(
  'venues/fetchVenueById',
  async (venueId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/venues/${venueId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createVenue = createAsyncThunk(
  'venues/createVenue',
  async (venueData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/venues`, venueData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateVenue = createAsyncThunk(
  'venues/updateVenue',
  async ({ venueId, venueData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/venues/${venueId}`, venueData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteVenue = createAsyncThunk(
  'venues/deleteVenue',
  async (venueId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/venues/${venueId}`);
      return venueId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  venues: [],
  currentVenue: null,
  loading: false,
  error: null,
};

const venueSlice = createSlice({
  name: 'venues',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setCurrentVenue: (state, action) => {
      state.currentVenue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Venues
      .addCase(fetchVenues.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVenues.fulfilled, (state, action) => {
        state.loading = false;
        state.venues = action.payload;
      })
      .addCase(fetchVenues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Venue by ID
      .addCase(fetchVenueById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVenueById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentVenue = action.payload;
      })
      .addCase(fetchVenueById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create Venue
      .addCase(createVenue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createVenue.fulfilled, (state, action) => {
        state.loading = false;
        state.venues.push(action.payload);
      })
      .addCase(createVenue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update Venue
      .addCase(updateVenue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateVenue.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.venues.findIndex(
          (venue) => venue.id === action.payload.id
        );
        if (index !== -1) {
          state.venues[index] = action.payload;
        }
        if (state.currentVenue?.id === action.payload.id) {
          state.currentVenue = action.payload;
        }
      })
      .addCase(updateVenue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete Venue
      .addCase(deleteVenue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVenue.fulfilled, (state, action) => {
        state.loading = false;
        state.venues = state.venues.filter(
          (venue) => venue.id !== action.payload
        );
        if (state.currentVenue?.id === action.payload) {
          state.currentVenue = null;
        }
      })
      .addCase(deleteVenue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, setCurrentVenue } = venueSlice.actions;
export default venueSlice.reducer; 