import "../style/srvice.css"
import ServiceBox from "./ServiceBox";

let titles = [ 
    {title : "WEB DESIGN"},
    {title : "WEB DEVELOPMENT"},
    {title : "PHOTOGRAPHY"},
    {title : "RESPONSIVE DESIGN"},
    {title : "GRAPHIC DESIGN"},
    {title : "MARKETING SERVICES"}
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