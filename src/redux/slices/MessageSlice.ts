import { createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type { Message } from "../../types/MessageType";

type InitialState = {
  messages: Message[];
};

const initialState: InitialState = {
  messages: [],
};

export const MessagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.messages = action.payload;
    },

    addComment: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },

    editComment: (state, action: PayloadAction<Message>) => {
      state.messages = state.messages.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
    },

    toggleFavorite: (state, action: PayloadAction<Message>) => {
      state.messages = state.messages.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
    },
    },

  },
);

export const { setComments, addComment, editComment, toggleFavorite } = MessagesSlice.actions;
export default MessagesSlice.reducer;