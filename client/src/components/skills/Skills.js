


import './Skills.css';

const Skills = () => {
 
  return (
    
    <>
  
      <h2 className="font-weight-bold text-left heading2">My Skills</h2>
     
      <div  className="ps-3 ">
        <p>HTML</p>
        <div className="bg-white rounded-end-pill mb-2 container-div">
          <div className="skills html">70%</div>
        </div>
      </div>
   
      <div className="ps-3">
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

      </div>
    </>
  )
}
export default Skills;