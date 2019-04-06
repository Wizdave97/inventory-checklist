import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState={
  inventory:[
    {
      name:'Bannana',
      quantity:300,
      unit:'Oz',
      category:'fruit',
      id:1
    },
    {
      name:'Bannana',
      quantity:300,
      unit:'Oz',
      category:'fruit',
      id:2
    },
    {
      name:'Bannana',
      quantity:300,
      unit:'Oz',
      category:'fruit',
      id:3
    },
    {
      name:'Bannana',
      quantity:300,
      unit:'Oz',
      category:'fruit',
      id:4
    }
  ],
  loading:false,
  error:null,
  selectedItem:null,
  addInventory:false,
  addInventorySuccess:false,
  addInventoryFail:false

}

const reducer= (state=initialState,action)=>{

  switch (action.type){
    case actionTypes.ADD_INVENTORY :return updateObject(state,{addInventory:true})
    case actionTypes.ADD_INVENTORY_SUCCESS :return updateObject(state,{addInventory:false,addInventorySuccess:true,addInventoryFail:false})
    case actionTypes.ADD_INVENTORY_FAIL: return updateObject(state,{addInventory:false,addInventoryFail:true})
    default: return state
  }

}

export default reducer;
