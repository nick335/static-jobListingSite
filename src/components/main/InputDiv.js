import { useSelector, useDispatch } from "react-redux"
import { nanoid } from "nanoid"
import { clearSelectedSkill } from "../../store/features/Job/jobSlice"

import Input from "./Input"

export default function InputDiv(){
  const dispatch = useDispatch()
  const selectedSkills = useSelector(state => state.jobs.selectedSkill)

  const inputs = selectedSkills.map(each => {
    return <Input 
              key = {nanoid()}
              skill = {each}
            />
  })
  return(
    <div className="search-input">
      <div className="inputs-div">
        {inputs}
      </div>
      <div className="clear-div">
        <h4 onClick={() => dispatch(clearSelectedSkill())}>Clear</h4>
      </div>
    </div>
  )
}