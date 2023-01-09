import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import {useHttp} from "../../../../hooks/http.hook";

const pizzasAdapter = createEntityAdapter()

const initialState = pizzasAdapter.getInitialState(
  {
    pizzasLoadingStatus: 'idle'
  }
)

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  () => {
    const request = useHttp()
    return request("http://localhost:3001/pizzas")
  }
)

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, state => {
      state.pizzasLoadingStatus = 'loading'
    })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.pizzasLoadingStatus = 'idle'
        pizzasAdapter.setAll(state, action.payload)
      })
      .addCase(fetchPizzas.rejected, state => {
        state.pizzasLoadingStatus = 'error'
      })
      .addDefaultCase(() => {
      })
  }
})

const {reducer} =pizzasSlice;

export default reducer;

export const {selectAll}= pizzasAdapter.getSelectors(state=>state.pizzas)