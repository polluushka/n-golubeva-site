type WorksProps = {
    title_block: string;
    works: [
        {
            name_project: string;
            category: string;
            adress: string;
            img: string;
        },
        {
            name_project: string;
            category: string;
            adress: string;
            img: string;
        },
        {
            name_project: string;
            category: string;
            adress: string;
            img: string;
        },
        {
            name_project: string;
            category: string;
            adress: string;
            img: string;
        }
    ]
}

const Works = ({ title_block, works }: WorksProps) => {
    return(
        <div id="works" className="default-block">
            <h2 className="title-block">{ title_block }</h2>
            <div className="works-container">
                {
                    works.map((work, index) => {
                        return(
                            <div className="work-item" key={ `work-item-${index + 1}` }>
                                <div className="work-img-container">
                                    <img src="#" alt="" className="custom-img" />
                                </div>
                                <div className="work-item-info">
                                    <p className="work-item-title">{ index + 1 < 10 ? `0${index + 1}` : `${index + 1}` } — { work.name_project }</p>
                                    <p className="work-item-description">{ work.category } · { work.adress }</p>
                                </div>
                            </div>
                        )
                    })
                }    
            </div>
            <button type="button" className="button-more">Еще 5 работ</button>
        </div>
    )
}

export default Works;