import './About.css';
const About = () => {
  return (
    <section className=" mb-5 about">
      <div className="image1">
        <img className="image" src={require('../../assets/images/me.jpeg')} alt="profile" width="370" height="370" />
      </div>
      <div className="details">
        <p>Hello, I'm Vijitha and I'm working as a web developer. I believe I am a very ambitious person who loves to
          work on making the website work well. Working on the web is my passion as I love to work on exciting projects.
        </p>
        <p>From : Kerala </p>

        <p >Gender :Female </p>
        <p >Email : vijitha006@gmail.com </p>
      </div>
    </section>
  )
}
export default About;