import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import {useHttp} from "../../../hooks/http.hook";

const stocksAdapter= createEntityAdapter()

const initialState = stocksAdapter.getInitialState(
  {
    stocksLoadingStatus:'idle'
  }
)

export const fetchStocks = createAsyncThunk(
  'stocks/fetchStocks',
  ()=> {
    const request = useHttp()
    return request("http://localhost:3001/stocks")
  }
)

const stocksSlice = createSlice({
  name:'stocks',
  initialState,
  reducers:{},
  extraReducers: (builder)=>{
    builder.
      addCase(fetchStocks.pending, state =>{
        state.stocksLoadingStatus = 'loading'
    })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.stocksLoadingStatus = 'idle'
        stocksAdapter.setAll(state, action.payload)
      })
      .addCase(fetchStocks.rejected, state => {
        state.stocksLoadingStatus = 'error'
      })
      .addDefaultCase(() => {
      })
  }
})

const { reducer} = stocksSlice;

export default reducer;

export const {selectAll}=stocksAdapter.getSelectors(state=>state.stocks)