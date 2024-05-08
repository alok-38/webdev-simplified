import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Tips", body: "lorem ipsum...", author: "alok", id: 3 },
  ]);

  return <BlogList blogs={blogs} />;
};

export default Home;
