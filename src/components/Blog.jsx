import "../style/blog.css"
import BlogBox from "./BlogBox";
let posts = [
  { 
    title:"post 1",
    user : "Mehrzad",
  },
  { 
    title:"post 2",
    user : "Milad",
  },
  { 
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