// Components
import HomeTitle from './HomeTitle/HomeTitle';
import Overview from './Overview/Overview';
import Features from './Features/Features';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

const Home = () => {
    return(
        <>
<head>
    <title>Elevaite</title>
</head>
<body>
    <HomeTitle/>
    <Features/>
    <Footer/>
</body>
        </>
    );
};


export default Home;