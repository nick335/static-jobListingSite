import { useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import Job from "./job"


export default function Jobs(){
  const { jobsData, selectedSkill } = useSelector(state => state.jobs)

  const allList = jobsData.map(each => {
    return <Job 
              key={nanoid()}
              company = {each.company}
              contract = {each.contract}
              level = {each.level}
              postedAt = {each.postedAt}
              role = {each.role}
              languages = {each.languages}
              position = {each.position}
              image = {each.logo}
              location = {each.location}
              featured = {each.featured}
              new = {each.new}
            />
  })
  const filteredList = jobsData.map(each => {
    const skills = [each.role, each.level, ...each.languages]
    if(selectedSkill.every(elem => skills.includes(elem))){
      return <Job 
              key={nanoid()}
              company = {each.company}
              contract = {each.contract}
              level = {each.level}
              postedAt = {each.postedAt}
              role = {each.role}
              languages = {each.languages}
              position = {each.position}
              image = {each.logo}
              location = {each.location}
              featured = {each.featured}
              new = {each.new}
            />
    }else{
      return <></>;
    }
  })



  return(
    <div className="jobs">
      {selectedSkill.length === 0 ? allList : filteredList}
    </div>
  )
}