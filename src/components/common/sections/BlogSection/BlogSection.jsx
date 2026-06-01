import "./BlogSection.css";
import BlogCard from "../../items/BlogCard/BlogCard";

const BlogSection = ({ blogPosts, handlePostClick }) => {
  return (
    <section className="blog-section">
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            {...post} // title, image, description, paragraphs, link, source, date...
            handlePostClick={handlePostClick}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;