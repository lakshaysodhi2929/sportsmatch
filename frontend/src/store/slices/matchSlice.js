import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const fetchMatches = createAsyncThunk(
  'matches/fetchMatches',
  async (filters, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/matches`, { params: filters });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createMatch = createAsyncThunk(
  'matches/createMatch',
  async (matchData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/matches`, matchData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const joinMatch = createAsyncThunk(
  'matches/joinMatch',
  async (matchId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/matches/${matchId}/join`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const leaveMatch = createAsyncThunk(
  'matches/leaveMatch',
  async (matchId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/matches/${matchId}/leave`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  matches: [],
  currentMatch: null,
  loading: false,
  error: null,
};

const matchSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setCurrentMatch: (state, action) => {
      state.currentMatch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Matches
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.matches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Create Match
      .addCase(createMatch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMatch.fulfilled, (state, action) => {
        state.loading = false;
        state.matches.push(action.payload);
      })
      .addCase(createMatch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Join Match
      .addCase(joinMatch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(joinMatch.fulfilled, (state, action) => {
        state.loading = false;
        const matchIndex = state.matches.findIndex(
          (match) => match.id === action.payload.id
        );
        if (matchIndex !== -1) {
          state.matches[matchIndex] = action.payload;
        }
        if (state.currentMatch?.id === action.payload.id) {
          state.currentMatch = action.payload;
        }
      })
      .addCase(joinMatch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Leave Match
      .addCase(leaveMatch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(leaveMatch.fulfilled, (state, action) => {
        state.loading = false;
        const matchIndex = state.matches.findIndex(
          (match) => match.id === action.payload.id
        );
        if (matchIndex !== -1) {
          state.matches[matchIndex] = action.payload;
        }
        if (state.currentMatch?.id === action.payload.id) {
          state.currentMatch = action.payload;
        }
      })
      .addCase(leaveMatch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, setCurrentMatch } = matchSlice.actions;
export default matchSlice.reducer; 