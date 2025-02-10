function ServiceBox({title,icon}){
    return(
        <div className="col-4">
            <div className="service-box">
                <div className="service-icon">
                    <i className={icon} ></i>
                </div>
                <div className="service-content">
                    <h3 className="service-title">{title}</h3>
                    <p className="service-info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                        adipisci eaque autem fugiat! Quia, provident vitae! Magni
                        tempora perferendis eum non provident.
                    </p>
                </div>
            </div>
        </div>

    );
}

export default ServiceBox ;