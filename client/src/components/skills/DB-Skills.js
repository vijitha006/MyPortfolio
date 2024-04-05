

import axios from 'axios';
import { useState ,useEffect} from 'react';
import './Skills.css';
const config = {
  //  apiUrl:"https://type.fit/api/quotes",
  apiUrl: "http://localhost:8082/skills"
}
const Skills = () => {
  const [url, setUrl] = useState(null)
  const [skills, setSkills] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(config.apiUrl);
        console.log('Response:', response.data);
        setUrl(config.apiUrl);
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function
}, []);
console.log("content",skills)
if (skills === null) {
  return null;
}
  return (
    
    <>
  
      <h2 className="font-weight-bold text-left heading2">My Skills</h2>
      {skills.map((skill,index)=>(
      <div key={index} className="ps-3 ">
        <p>{skill.name}</p>
        <div className="bg-white rounded-end-pill mb-2 container-div">
          <div className="skills html">{skill.percentage + '%'}</div>
        </div>
      </div>
      ))}
      {/* <div className="ps-3">
        <p>CSS</p>
        <div className="bg-white rounded-end-pill mb-2 container-div">
          <div className="skills css">60%</div>
        </div>
      </div>
      <div className="ps-3">
        <p>Angular</p>
        <div className="bg-white rounded-end-pill mb-2 container-div">
          <div className="skills angular">60%</div>
        </div>
      </div>

      <div className="ps-3">
        <p>JavaScript</p>
        <div className=" bg-white rounded-end-pill mb-2 container-div">
          <div className="skills js">40%</div>
        </div>

      </div> */}
    </>
  )
}
export default Skills;