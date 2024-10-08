import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasksData from "../../data/tasks";

const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  // Имитация асинхронной загрузки данных с помощью setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasksData);
    }, 1000);
  });
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export { fetchTasks }; // экспортируем созданное действие fetchTasks

export default tasksSlice.reducer;
