import { createSlice } from '@reduxjs/toolkit'

export const clockSlice = createSlice({
    name: 'clockApp',
    initialState: {
      currentMenu: 0,
      menuList: ['闹钟', '时钟', '秒表', '计时'],
    },
    reducers: {
      setCurrentMenu: (state, action) => {
        state.currentMenu = action.payload
      }
    }
  })
  
  export const { setCurrentMenu } = clockSlice.actions;
  export const currentMenu = (state: any) => state.currentMenu;
  export const menuList = (state: any) => state.menuList;