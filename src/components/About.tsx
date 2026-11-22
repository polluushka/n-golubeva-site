type AboutProps = {
    title_block: string;
    about: {
        description: string;
        tools: string[];
        skills: string[];
        img: ""        
    }
    
}

const About = ({ title_block, about }: AboutProps) => {
    return(
        <div id="about" className="default-block">
            <h2 className="title-block">{ title_block }</h2>
            <div className="about-container">
                <div className="about-img-container">
                    <img src="#" alt="" className="custom-img" />
                </div>
                <div className="about-info">
                    <p className="about-description">{ about.description }</p>
                    <div className="tags-block">
                        <h3 className="subtitle">Инструменты</h3>
                        <div className="tags">
                            {
                                about.tools.map((tool, index) => <div className="tag-item" key={ `tool-item-${index + 1}` }>{ tool }</div>)
                            }
                        </div>
                    </div>
                    
                    <div className="tags-block">
                        <h3 className="subtitle">Навыки</h3>
                        <div className="tags">
                            {
                                about.skills.map((skill, index) => <div className="tag-item" key={ `skill-item-${index + 1}` }>{ skill }</div>)
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About;