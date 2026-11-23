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
                <h1 className="text-special h1-home">
                    <span className="h1-regular">{ content.title_normal }</span><br/>
                    <span className="h1-italic">{ content.title_italic }</span>
                </h1>
                <p className="text-default home-description">{ content.description }</p>
                <Button content={ content.button }></Button>
            </div>
            <div className="home-banner-container">
                <img src="#" alt="" className="custom-img" />
            </div>
        </div>
    )
}

export default Home;