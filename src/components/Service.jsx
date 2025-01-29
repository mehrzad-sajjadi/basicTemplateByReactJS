import "../style/srvice.css"
import ServiceBox from "./ServiceBox";

let titles = [ 
    {title : "WEB DESIGN" , icon :"bi bi-briefcase"},
    {title : "WEB DEVELOPMENT", icon :"bi bi-card-checklist"},
    {title : "PHOTOGRAPHY" ,icon :"bi bi-bar-chart"},
    {title : "RESPONSIVE DESIGN" , icon :"bi bi-briefcase"},
    {title : "GRAPHIC DESIGN" , icon :"bi bi-card-checklist"},
    {title : "MARKETING SERVICES" ,icon :"bi bi-briefcase"}
]; 

function Service(){
    return(
        <section id="services">
            <div className="container">
                 <div className="section-info">
                    <h2 className="section-title">SERVICES</h2>
                    <p className="section-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="row">
                    <ServiceBox {...titles[0]} />
                    <ServiceBox {...titles[1]} />
                    <ServiceBox {...titles[2]} />
                    <ServiceBox {...titles[3]} />
                    <ServiceBox {...titles[4]} />
                    <ServiceBox {...titles[5]} />

                </div>
            </div>
      </section>
  
    );
}

export default Service ;