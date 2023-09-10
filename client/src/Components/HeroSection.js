import '../CSS/HeroSection.css';
import bg from '../Images/Bg.png'

const HeroSection = () => {
    return (
        <section className="hero" style={{ display: "block", margin: "auto", marginTop: "35px", height: "fit-content", width: "fit-content", justifyItems: 'center', alignItems: 'center' }}>
             <img  src={bg} alt='No Image Found' />

            <button className='but2' id='buttonnichewala' style={{ display: "block", margin: "auto", marginBottom: 'auto', marginTop: '20px' }}>Explore  US</button>

        </section>
    );
};

export default HeroSection;