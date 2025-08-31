import "../style/blog.css"

//images
import post1 from "../../public/img/post-1.jpg";
import post2 from "../../public/img/post-2.jpg";
import post3 from "../../public/img/post-3.jpg";


import BlogBox from "./BlogBox";
let posts = [
  { 
    img : post1 ,
    title:"post 1",
    user : "Mehrzad",
  },
  { 
    img : post2 ,
    title:"post 2",
    user : "Milad",
  },
  { 
    img : post3 ,
    title:"post 3",
    user : "Mehrzad",
  }
]

function Blog(){
    return(
        <section id="blog">
            <div className="container">
                <div className="section-info">
                    <h2 className="section-title">BLOG</h2>
                    <p className="section-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="row">
                    <BlogBox {...posts[0]} />            
                    <BlogBox {...posts[1]} />            
                    <BlogBox {...posts[2]} />            
                </div>
            </div>
        </section>
  
    );
}

export default Blog ;