import "./certifications.scss";

export default function Certifications() {
  //certification data
  const certData = [
    {
      id: 1,
      name: "Google",
      title: "IT Automation with Python",
      logo: "/media/google.svg",
      img: "/media/GOOGLEIT.jpg",
      link: "/files/Google_IT_Automation_Final_Certificate.pdf",
    },
    {
      id: 2,
      name: "Amazon Web Services",
      title: "AWS Solutions Architect Course",
      logo: "/media/aws.svg",
      img: "/media/AWSSA.jpg",
      link: "/files/AWS_Solutions_Architect_Course_Certificate.pdf",
    },
    {
      id: 3,
      name: "Virginia Tech",
      title: "Bachelor of Science",
      logo: "/media/vt.svg",
      img: '',
      link: "",
    },
  ];

  return (
    <div className="certifications" id="certifications">
      <div className="left">
        <div className="container">
          <h2>An Ever-Learning Journey</h2>
          <p>
            I belive learning is one of the most important aspects of life. In
            my journey as a recent graduate and beginner developer, learning
            displays my ambition to adapt and determination to succeed.
          </p>
        </div>
      </div>
      <div className="right">
        <h1>Certifications</h1>
        <div className="container">
          {certData.map((d) => (
            <div key={d.id} className="card">
              <div className="top">
                <img className="institution" src={d.logo} alt="" />
              </div>
              <div className="middle">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
              <div className="bottom">
                <a className="icon" href={d.link}>
                  <img className='cert' src={d.img} alt="" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <a href="#contact">
          <img src="/media/downarrow0.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
