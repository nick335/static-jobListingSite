import InputDiv from "./InputDiv"
import { useSelector } from 'react-redux'
import Jobs from "./Jobs"

export default function Main(){
  const selectedSkill = useSelector(state => state.jobs.selectedSkill)
  return(
    <main className="main">
      { selectedSkill.length === 0 ? <></> : <InputDiv />}
      <Jobs />
    </main>
  )
}