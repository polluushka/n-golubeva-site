"use client";

type ExperienceProps = {
    key: string;
    experience: {
        type_experience: string;
        period: string;
        title_institution: string;
        job_title: string;
        responsibilities: string[]
    }
}

const ExperienceCard = ({ experience, key }: ExperienceProps) => {
    const enterExperienceCard = (event: React.MouseEvent<HTMLDivElement>) => {
        const experienceItem = event.currentTarget;
        const experienceСontent = experienceItem.querySelector<HTMLDivElement>('.experience-item-content');
        if(!experienceСontent) return;
        const contentHeight = experienceСontent.scrollHeight;
        const itemHeight = experienceItem.scrollHeight - experienceСontent.clientHeight + contentHeight;
        experienceСontent.style.maxHeight = `${contentHeight}px`; 
        experienceItem.style.maxHeight = `${itemHeight}px`; 
    }

    const leaveExperienceCard = (event: React.MouseEvent<HTMLDivElement>) => {
        const experienceItem = event.currentTarget;
        const experienceСontent = experienceItem.querySelector<HTMLDivElement>('.experience-item-content');
        if(!experienceСontent) return;
        experienceСontent.style.maxHeight = "18rem"; 
        experienceItem.style.maxHeight = "21rem"; 
    }

    return(
        <div className="experience-item" key={ `experience-item-${ key + 1}` } 
            onMouseEnter={ (event) => enterExperienceCard(event) }
            onMouseLeave={ (event) => leaveExperienceCard(event) } 
            onClick={ (event) => enterExperienceCard(event) }>
            <div className="experience-item-content">
                <div className="head-experience-item">
                    <p className="text-default label-experience">{ experience.type_experience }</p>
                    <p className="text-default label-experience">{ experience.period }</p>
                </div>
                <h3 className="text-default title-experience">{ experience.title_institution }</h3>
                <p className="text-default standart-p">{ experience.job_title }</p>
                {
                    experience.responsibilities.length > 1 ? 
                        <ul className="marker-list">
                            {
                                experience.responsibilities.map((responsibility, index) => 
                                    <li className="text-default standart-p" 
                                        key={ `experience${ key + 1 }-responsibility${ index + 1 }` }>{ responsibility }</li>)
                            }
                        </ul> : <p className="text-default standart-p">{ experience.responsibilities[0] }</p>
                }
            </div>
        </div>
    )
}

export default ExperienceCard;