import { useDispatch } from "react-redux"
import { toggleChoice } from "../../store/features/Job/jobSlice"
import { useSelector } from "react-redux";

export default function Skill(props){
  const skill = props.skill
  const dispatch = useDispatch();
  const selectedSkills = useSelector((state) => state.jobs.selectedSkill)

  const selectedSkill = selectedSkills.includes(skill) ? 'selected' : ''

  return(
    <div className={`job-skills_div ${selectedSkill}`}  onClick={ () => dispatch(toggleChoice(skill)) }>
      <h3>{props.skill}</h3>
    </div>
  )
}