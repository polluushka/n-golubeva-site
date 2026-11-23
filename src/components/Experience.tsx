import ExperienceCard from "./ExperienceCard";

type ExperienceItem = {
    type_experience: string;
    period: string;
    title_institution: string;
    job_title: string;
    responsibilities: string[]
}

type ExperienceProps = {
    title_block: string;
    experience: ExperienceItem[];
}

const Experience = ({ title_block, experience }: ExperienceProps) => {
    return(
        <div id="experience" className="default-block">
            <h2 className="text-special title-block">{ title_block }</h2>
            <div className="experience-container">
                <div className="experience-scroll">
                    {
                        experience.map((item, index) => {
                            return(

                                <ExperienceCard experience={ item } key={ `${index + 1}` } />

                                // <div className="experience-item" key={ `experience-item-${index + 1}` } onMouseEnter={ () => experienceCardAnimation() }>
                                //     <div className="experience-item-content">
                                //         <div className="head-experience-item">
                                //             <p className="text-default label-experience">{ item.type_experience }</p>
                                //             <p className="text-default label-experience">{ item.period }</p>
                                //         </div>
                                //         <h3 className="text-default title-experience">{ item.title_institution }</h3>
                                //         <p className="text-default standart-p">{ item.job_title }</p>
                                //         {
                                //             item.responsibilities.length > 1 ? 
                                //                 <ul className="marker-list">
                                //                     {
                                //                         item.responsibilities.map((responsibility, index2) => 
                                //                             <li className="text-default standart-p" 
                                //                                 key={ `experience${ index + 1 }-responsibility${ index2 + 1 }` }>{ responsibility }</li>)
                                //                     }
                                //                 </ul> : <p className="text-default standart-p">{ item.responsibilities[0] }</p>
                                //         }
                                //     </div>
                                // </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Experience;