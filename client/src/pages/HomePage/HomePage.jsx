import './HomePage.css';

// Components
import HomeTitle from './HomeTitle/HomeTitle';
import Overview from './Overview/Overview';
import Features from './Features/Features';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return(
        <>
<head>
    <title>Elevaite</title>
</head>
<body>
    <HomeTitle/>
    <Overview/>
    <Features/>
    <Footer/>
</body>
        </>
    );
};


export default Home;