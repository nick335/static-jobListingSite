import Skill from "./skill"
import { nanoid } from "@reduxjs/toolkit/"

export default function Job(props){
  const skills = [props.role, props.level, ...props.languages]
  const allSkills = skills.map( each => {
    return <Skill 
              key = {nanoid()}
              skill = {each}
            />
  })
  const borderLeft = props.featured ? 'border-left' : ''
  return(
    <div className={`job ${borderLeft}`}>
      <div className="job-info">
        <div className="job-info_imgDiv">
          <img alt={props.company} src={props.image} className="job-info_imgDiv-img" />
        </div>
        <div className="job-info_infoDiv">
          <div className="job-info_infoDiv-company">
            <h1 className="job-info_infoDiv-company-header">{props.company}</h1>
            {props.new && <h1 className="job-info_infoDiv-company-new">new!</h1>}
            {props.featured && <h1 className="job-info_infoDiv-company-featured">featured</h1>}
          </div>
          <div className="job-info_infoDiv-role">
            <h2 className="job-info_infoDiv-role-header">{props.position}</h2>
          </div>
          <div className="job-info_infoDiv-nature">
            <ul className="job-info_infoDiv-nature-lists">
              <li className="list">{props.postedAt}<p>.</p></li>
              <li className="list">{props.contract}<p>.</p></li>
              <li className="list">{props.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="job-skills">
        {allSkills}
      </div>
    </div>
  )
  
}