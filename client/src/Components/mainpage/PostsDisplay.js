import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import backendURL from "../../api/axios";

const API_ENDPOINTS = {
  VIEW_POSTS: "/api/posts/",
};

function Posts() {
  const [posts, setPosts] = useState([]);
  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${backendURL}${API_ENDPOINTS.VIEW_POSTS}`);
        const allPosts = response.data;

        // Exclude the most recent post and display only 6 posts
        const displayedPosts = allPosts.slice(1, 7);
        setPosts(displayedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeft.current = scrollContainerRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX.current) * 2; // Adjust the scroll speed
      scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const container = scrollContainerRef.current;
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listeners on unmount
    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const animateScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollBy({
          left: 1, // Adjust this value to control scrolling speed
          behavior: "smooth",
        });

        // Reset scroll position to the beginning to create infinite effect
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }

        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  }, []);

  return (
    <div className="flex min-h-fit p-4 my-14">
      <div
        ref={scrollContainerRef}
        className="overflow-hidden whitespace-nowrap"
        style={{ overflowX: 'hidden', position: 'relative', width: '100%' }} // Hide default scrollbar
      >
        <div className="inline-flex" style={{ width: '200%' }}>
          {/* Duplicate posts for infinite scroll effect */}
          {[...posts, ...posts].map((post) => (
            <div
              key={post.id}
              className="relative bg-white rounded-lg shadow-md m-2 flex-none w-80 h-96 group"
              style={{ flex: '0 0 auto', overflow: 'hidden' }} // Ensure posts don't shrink
            >
              <div className="absolute top-0 left-0 bg-yellow-600 text-white text-sm font-semibold p-2 rounded-br-lg">
                Recent Post
              </div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Hover Description with Pop-up Effect */}
              <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out transform origin-top">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm">{post.description}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="text-white text-center p-4">
                  <h2 className="text-xl font-semibold mb-2 overflow-hidden text-ellipsis whitespace-normal">
                    {post.title}
                  </h2>
                  {/* Static star rating */}
                  <div className="text-yellow-400 text-2xl">
                    ★★★★☆
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
