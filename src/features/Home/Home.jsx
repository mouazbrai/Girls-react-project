import Button from "../../components/ui/Button";
import girlHome from "../../assets/images/girlHome.jpg";
const Home = () => {
    return (
        <>
            <div className="left-section w-full h-full md:w-2/4 py-10 px-7">
                <h2 className="home-title">girls</h2>
                <span className="home-caption">Your Monthly Lifestyle Magazine</span>
                <p className="home-paragraph">Discover your world with every new issue. We celebrate your beauty, ambition, and inspiring success stories. Girl's Magazine is your ultimate guide to becoming the best version of yourself.</p>
                <Button />
            </div>
            <div className="right-section w-full h-full md:w-2/4 py-10 px-7">
            <div className="home-img-section ">
                <img src={girlHome} alt="Home RightSide Image" className="home-img h-96 w-full" />
            </div>
            </div>
        </>
    )
}
export default Home;