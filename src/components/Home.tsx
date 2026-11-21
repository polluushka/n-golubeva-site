import Button from "./Button";

type HomeProps = {
    content: {
        title_normal: string;
        title_italic: string;
        description: string;
        button: string
    } 
}

const Home = ({ content }: HomeProps) => {
    return(
        <div id="home">
            <div className="home-content-text">
                <h1 className="h1-home">
                    <span className="h1-regular">{ content.title_normal }</span><br/>
                    <span className="h1-italic">{ content.title_italic }</span>
                </h1>
                <p className="home-description">{ content.description }</p>
                <Button content={ content.button }></Button>
            </div>
            <div className="home-banner-container">
                <img src="#" alt="" className="img-banner" />
            </div>
        </div>
    )
}

export default Home;