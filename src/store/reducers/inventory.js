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
const increaseQuantity = (state,id)=>{
  let newState=updateObject(state,{})
  let {inventory}= newState
  for(let i=0;i<inventory.length;i++){
    if(inventory[i].id==id){
      let quantity=inventory[i].quantity
      let objToIncrease=updateObject(inventory[i],{quantity:quantity+1})
      inventory[i]=objToIncrease
      return updateObject(state,newState)
    }
  }
}

const decreaseQuantity = (state,id)=>{
  let newState=updateObject(state,{})
  let {inventory}= newState
  for(let i=0;i<inventory.length;i++){
    if(inventory[i].id==id){
      let quantity=inventory[i].quantity
      let objToIncrease=updateObject(inventory[i],{quantity:quantity-1})
      inventory[i]=objToIncrease
      return updateObject(state,newState)
    }
  }
}

const reducer= (state=initialState,action)=>{

  switch (action.type){
    case actionTypes.ADD_INVENTORY :return updateObject(state,{addInventory:true})
    case actionTypes.ADD_INVENTORY_SUCCESS :return updateObject(state,{addInventory:false,addInventorySuccess:true,addInventoryFail:false})
    case actionTypes.ADD_INVENTORY_FAIL: return updateObject(state,{addInventory:false,addInventoryFail:true})
    case actionTypes.INCREASE_QUANTITY: return increaseQuantity(state, action.value)
    case actionTypes.DECREASE_QUANTITY: return decreaseQuantity(state,action.value)
    default: return state
  }

}

export default reducer;
