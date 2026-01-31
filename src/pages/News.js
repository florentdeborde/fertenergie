import CoverMenu from "../components/common/sections/CoverMenu/CoverMenu";
import BlogSection from "../components/common/sections/BlogSection/BlogSection";
import Modal from "../components/common/modals/PostModal/PostModal";
import { useState } from "react";

const News = ({ t }) => {
  const menuName = t("pages.news.title", { returnObjects: true });
  const [modalOpen, setModalOpen] = useState(false);
  const [title] = useState("");
  const [description] = useState("");
  const [detailedDescription] = useState("");
  const [image] = useState("");

  const blogPosts = t("pages.news.posts", { returnObjects: true });

  const handlePostClick = (link) => {
    /*       
    const post = blogPosts.find(p => p.link === link);
    setTitle(post.title);
    setDescription(post.description);
    setDetailedDescription(post.detailedDescription);
    setImage(post.image);
    setModalOpen(true); 
    */
  }

  return (
    <div className="content">
      <CoverMenu menuName={menuName} />
      <BlogSection handlePostClick={handlePostClick} blogPosts={blogPosts} />
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
        content={description}
        detailedDescription={detailedDescription}
        imageUrl={image}
      />
    </div>
  );
}

export default News;