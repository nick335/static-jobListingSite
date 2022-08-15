import { createSlice } from "@reduxjs/toolkit";
import account from '../../../images/account.svg';
import eyecam from '../../../images/eyecam-co.svg';
import faceit from '../../../images/faceit.svg';
import insure from '../../../images/insure.svg';
import loopstudio from '../../../images/loop-studios.svg';
import manage from '../../../images/manage.svg'
import myhome from '../../../images/myhome.svg'
import photosnap from '../../../images/photosnap.svg'
import shortly from '../../../images/shortly.svg'
import airfiliter from '../../../images/the-air-filter-company.svg'

const imgData = [photosnap,manage,account,myhome,loopstudio,faceit,shortly,insure,eyecam,airfiliter]

const rawData = require('./data.json')
console.log(rawData)

const JobsData = rawData.map((item, index) => {
  return{
    ...item,
    logo: imgData[index]
  }
})


const initialState = {
  jobsData: JobsData,
  selectedSkill: [],
}


const jobSlice = createSlice({
  name: 'jobLists',
  initialState,
  reducers: {
    toggleChoice : (state, action) =>{
      const newSearch = action.payload
      if(state.selectedSkill.includes(newSearch)){
        state.selectedSkill = state.selectedSkill.filter( each => each !== newSearch )
      }else{
        state.selectedSkill.push(newSearch)
      }
    },
    clearSelectedSkill: (state) => {
      state.selectedSkill = []
    },
    removeSkill: (state, action) => {
      const skill = action.payload
      state.selectedSkill = state.selectedSkill.filter(each => each !== skill)
    }
  }
})

export const { toggleChoice, clearSelectedSkill, removeSkill } = jobSlice.actions
export default jobSlice.reducer;