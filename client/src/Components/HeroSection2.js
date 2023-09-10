import '../CSS/HeroSection2.css';
import Spline from '@splinetool/react-spline';
import {Link} from 'react-router-dom';
import  Video from '../Images/Video.png'

const HeroSection2 = () => {
    return (
        <>
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="header-ecosystem-content">
                            <h2 className="heading-style-h1">VidShield : Unleash Power of Web3 </h2>
                            <div className="padding-bottom padding-medium"></div>
                            <div className="button-center-wrapper">
                                <a data-w-id="3102efe8-6cea-af73-8654-1c5c21bd5bb7" href="/composedb" className="button is-link is-icon w-inline-block" style={{}}>
                                    <div className="text-link-wrapper">
                                        <div className="icon-embed-xsmall hide w-embed"></div>
                                    </div>
                                </a></div>
                        </div><div className="event-types-content">

                            <div id="w-node-_148d68e9-623c-439e-9bb4-b8f7904fb410-904fb410" className="cards_event-type is-outlined-no-planet">
                                <h3 className="heading-style-h4">Mint NFTs</h3>
                                <p className="text-size-regular">Mint NFT For Getting  Loyality . You Must Have At Least One NFT For Loyality</p>
                                <Spline scene="https://prod.spline.design/ntCk8SOnlfFaFdvN/scene.splinecode" />
                                <Link to="/mintnft"> <button className='but2'>Visit</button></Link>

                            </div>

                            <div id="w-node-_148d68e9-623c-439e-9bb4-b8f7904fb410-904fb410" className="cards_event-type is-outlined-no-planet">
                                <h3 className="heading-style-h4">Make Call </h3>
                                <p className="text-size-regular">VidShield Provides You Seamless NFT Gated Platform For Video Streaming</p>
                                <Spline scene="https://prod.spline.design/rnvb4pEG1arTyGj4/scene.splinecode" />
                                <Link to="/Lobby"><button className='but2'>Visit</button></Link>
                            </div>

                            <div id="w-node-_148d68e9-623c-439e-9bb4-b8f7904fb410-904fb410" className="cards_event-type is-outlined-no-planet"><h3 className="heading-style-h4">Experience MarketPlaces</h3><p className="text-size-regular">Check Out Our NFT MarketPlace Where you Can Unleash Some Rare NFTs To get Started</p>
                                <Spline scene="https://prod.spline.design/evBfjH1XuDnEf8Oo/scene.splinecode" />
                                <Link to="/marketplace"> <button className='but2'>Visit</button></Link>
                            </div>

                            <div id="w-node-_148d68e9-623c-439e-9bb4-b8f7904fb410-904fb410" className="cards_event-type is-outlined-no-planet">
                                <h3 className="heading-style-h4">Unlock Web3 Power</h3>
                                <p className="text-size-regular">Unlock Web3 Power My Buddy With PolyHell!!</p>
                                <Spline scene="https://prod.spline.design/joZFaKkXRspUdT2q/scene.splinecode" />
                                <button className='but2'>Visit</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default HeroSection2