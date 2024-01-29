

import CategoryNav from '../components/CategoryNav/CateogoryNav'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
import FreshRecommendation from '../components/freshrecommendations/FreshRecommendations'




const Home = () => {
   
    return (
        <>
        <Navbar />
        <div className="mt-16">
        <CategoryNav/>
        <FreshRecommendation/>
        <Footer/>
        </div>
            </>
    )
}
export default Home;