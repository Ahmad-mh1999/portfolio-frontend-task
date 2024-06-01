import { useEffect, useState } from "react";
import axios from "axios";
import { TEducation } from "../../types/type";
import PreLoader from "../Preloader/Preloader";

function EducationElement() {

  const [educationData, setEducationData] = useState<TEducation[]>([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/educations")
      .then((response) => {
        setEducationData(response.data.data);
        setLoding(false);
      })
      .catch((error) => console.log(error));
  }, []);

  
  if(loding) return <PreLoader />
  else return (
    <>
      {
        educationData.map((education,index) => (
          <div className="education-body" key={index}>
            <div className="row">
              <div className="col-md-8">
                <div className="certificate-title mt-4">
                  <h3>{education.title}</h3>
                </div>
                <div className="certificate-description">
                  <p>
                    {education.description}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="certificate-image mt-4">
                  <img src={education.photo} alt="photo of certificate" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
}

export default EducationElement;
