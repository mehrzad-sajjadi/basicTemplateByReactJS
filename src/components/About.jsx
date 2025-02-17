import "../style/about.css";
function About(){
    return(
        <section id="about">
            <div className="about">
                <h2 className="title">About Me</h2>
                <img className="about-img" src="./public/img/about.jpg" alt="milad" />
                <p className="info">
                    A creative and passionate software engineer with expertise in **Laravel**, **Vue.js**, and **React.js**, dedicated to building dynamic and scalable web applications. By combining deep knowledge of modern frameworks with hands-on experience in designing interactive user interfaces, I craft solutions that deliver high performance and exceptional user experiences. Always eager to embrace new opportunities for learning and innovation, I strive to create software that exceeds expectations.
                </p>
            </div>
        </section>
        
    );
}

export default About ;