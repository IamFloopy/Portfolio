import React, { useState , useEffect } from 'react'
import '../styles/paralex.css'
import tree from '../paralexImages/layer1.png'
import main from '../paralexImages/layer2.png'
import backHouse1 from '../paralexImages/layer3.png'
import backHouse2 from '../paralexImages/layer4.png'
import back from '../paralexImages/layer5.png'

var offsetYMove;
const paralex = () => {
    function Movement () {
        const [offsetY, setOffsetY] = useState(0);
        const handleScroll = () => setOffsetY(window.pageYOffset);
        offsetYMove = offsetY;

        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    }
    Movement()
    
    return (
        <div className="paralex">
            <header>
                <a href="#" class="logo">Filip</a>
                <ul>
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#tech">About</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </header>
            <section className="section">
                <img src={back} id="back" style={{ transform: `translateY(${offsetYMove * 1}px)` }}></img>
                <img src={backHouse2} id="backHouse2" style={{ transform: `translate(${offsetYMove * 0.05}px, ${offsetYMove * 0.75}px)` }}></img>
                <img src={backHouse1} id="backHouse1" style={{ transform: `translate(-${offsetYMove * 0.075}px, ${offsetYMove * 0.65}px)` }}></img>
                <img src={main} id="main" style={{ transform: `translate(${offsetYMove * 0.05}px, ${offsetYMove * 0.45}px)` }}></img>
                <h2 id="portfolio-title" style={{ transform: `translateX(${offsetYMove * 1.5}px)` }}>Welcome To <br/>My Personal Portfolio</h2>
                <a href="#projects" id="btn" style={{ transform: `translateY(${offsetYMove * 0.83}px)` }}>Explore</a>
                <img src={tree} id="tree"></img>
            </section>
        </div>
    )
}

export default paralex

