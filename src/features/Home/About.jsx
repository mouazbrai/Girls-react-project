import Button from "../../components/ui/Button";
import girlHome from "../../assets/images/about.png";
const Home = () => {
    return (
        <>
            <div className="left-section w-full h-full flex items-center md:w-2/4 py-10 px-7">
                <div className="about-content">
                    <h2 className="about-title"><span className="company-name">GIRLS MAGAZIN COMPANY</span> Empowering Voices, Styling Futures, and Redefining the Modern Narrative.</h2>
                    <p className="about-desc">At Girls Magazine Company, we are more than just a publication, we are a vibrant community dedicated to the dreamers, the doers, and the trendsetters. From our creative hub.</p>

                </div>
            </div>
            <div className="right-section w-full md:w-2/4">
            <div className="about-image">
                <img src={girlHome} alt="Home RightSide Image" className="home-img" />
            </div>
            </div>
        </>
    )
}
export default Home;