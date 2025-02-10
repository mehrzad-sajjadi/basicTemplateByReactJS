import "../style/srvice.css"
import ServiceBox from "./ServiceBox";

let titles = [ 
    {id:1 , title : "WEB DESIGN" , icon :"bi bi-briefcase"},
    {id:2 , title : "WEB DEVELOPMENT", icon :"bi bi-card-checklist"},
    {id:3 , title : "PHOTOGRAPHY" ,icon :"bi bi-bar-chart"},
    {id:4 , title : "RESPONSIVE DESIGN" , icon :"bi bi-briefcase"},
    {id:5 , title : "GRAPHIC DESIGN" , icon :"bi bi-card-checklist"},
    {id:6 , title : "MARKETING SERVICES" ,icon :"bi bi-briefcase"}
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
                    {
                        titles.map((title)=><ServiceBox {...title} />)
                    }
                </div>
            </div>
      </section>
  
    );
}

export default Service ;