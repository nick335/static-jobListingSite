import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from 'react-redux'
import { removeSkill } from "../../store/features/Job/jobSlice"
export default function Input(props){
  const dispatch = useDispatch()
  return(
    <div className="input-div">
      <h3>{props.skill}</h3>
      <FontAwesomeIcon icon={faXmark} className='icon' onClick={() => dispatch(removeSkill(props.skill))} />
    </div>
  )
}