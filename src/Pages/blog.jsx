import React, { useState, useEffect } from "react";
import blog1 from "../assets/Photos/blog4.jpeg";
import blog2 from "../assets/Photos/blog2.jpg";
import blog3 from "../assets/Photos/blog3.jpg";

import Footer from "../Components/Footer";

const blogs = [
  {
    title: "How a Single Photo Changed Varsha’s Confidence Forever",
    author: "Ashton William",
    date: "25 SEP 2023",
    image: blog1,
    summary:
      "A photo shoot at a saree store unexpectedly transformed a young woman's self-confidence and perception of beauty.",
    content: `A Photographer’s Unexpected Lesson on Beauty and Self-Perception

    As a photographer, I’ve always believed that my job is to capture moments—not just poses. But one day, during a routine shoot at Sudarshan Family Store (a charming saree shop), I witnessed something extraordinary: a photograph didn’t just freeze a memory; it transformed how a young woman saw herself.

    Recently, I was on a shoot at Sudarshan Family Store, a well-known saree shop, to capture customer testimonials. While I was working, I noticed a young woman named Varsha who had come in with her sister. They were shopping for a saree for her cousin's wedding.

    Varsha caught my attention because she was holding a beautiful necklace, carefully trying to find a saree that would complement it. After browsing for a while, she selected two sarees but hesitated — she wanted to try them on before making a final decision.

    The store didn’t have a trial facility, but I wanted to help. I spoke to the storekeeper, and we worked it out — we selected the sarees from the third floor and brought them down to the second floor where she could drape them with some assistance.

    When she arrived, Varsha was dressed casually in jeans and a t-shirt. But once she wore the saree and let her hair down, everything changed — she looked absolutely gorgeous. The transformation was striking, and I instinctively captured a few shots of that moment.

    Later, I edited the photos and sent them to her. She messaged me with an emotional response. Naturally, she had a few pimples on her face, but in the edited images, her skin looked flawless. She told me, “I look so good… I wish my face always looked like this.”

    That moment stayed with me. She shared that she had never paid much attention to her face before — but now, inspired by the photo, she felt motivated to take better care of herself. It wasn’t just about the clear skin — it was about seeing herself in a new light.

    That’s when I realized once again: photography can do more than capture beauty — it can build confidence, spark self-love, and change how someone sees themselves.

    This shoot wasn’t just about sarees. It was about a moment of transformation — and I’m grateful I got to witness and capture it.

    That day, I didn’t just take a photo—I gave Varsha a mirror that reflected her best self. And that’s the magic of photography: it doesn’t just capture beauty; it reveals it.`,
  },
  {
    title: "How a Single Photo Changed Varsha’s Confidence Forever",
    author: "Ashton William",
    date: "25 SEP 2023",
    image: blog2,
    summary:
      "A photo shoot at a saree store unexpectedly transformed a young woman's self-confidence and perception of beauty.",
    content: `A Photographer’s Unexpected Lesson on Beauty and Self-Perception

    As a photographer, I’ve always believed that my job is to capture moments—not just poses. But one day, during a routine shoot at Sudarshan Family Store (a charming saree shop), I witnessed something extraordinary: a photograph didn’t just freeze a memory; it transformed how a young woman saw herself.

    Recently, I was on a shoot at Sudarshan Family Store, a well-known saree shop, to capture customer testimonials. While I was working, I noticed a young woman named Varsha who had come in with her sister. They were shopping for a saree for her cousin's wedding.

    Varsha caught my attention because she was holding a beautiful necklace, carefully trying to find a saree that would complement it. After browsing for a while, she selected two sarees but hesitated — she wanted to try them on before making a final decision.

    The store didn’t have a trial facility, but I wanted to help. I spoke to the storekeeper, and we worked it out — we selected the sarees from the third floor and brought them down to the second floor where she could drape them with some assistance.

    When she arrived, Varsha was dressed casually in jeans and a t-shirt. But once she wore the saree and let her hair down, everything changed — she looked absolutely gorgeous. The transformation was striking, and I instinctively captured a few shots of that moment.

    Later, I edited the photos and sent them to her. She messaged me with an emotional response. Naturally, she had a few pimples on her face, but in the edited images, her skin looked flawless. She told me, “I look so good… I wish my face always looked like this.”

    That moment stayed with me. She shared that she had never paid much attention to her face before — but now, inspired by the photo, she felt motivated to take better care of herself. It wasn’t just about the clear skin — it was about seeing herself in a new light.

    That’s when I realized once again: photography can do more than capture beauty — it can build confidence, spark self-love, and change how someone sees themselves.

    This shoot wasn’t just about sarees. It was about a moment of transformation — and I’m grateful I got to witness and capture it.

    That day, I didn’t just take a photo—I gave Varsha a mirror that reflected her best self. And that’s the magic of photography: it doesn’t just capture beauty; it reveals it.`,
  },
  {
    title: "How a Single Photo Changed Varsha’s Confidence Forever",
    author: "Ashton William",
    date: "25 SEP 2025",
    image: blog3,
    summary:
      "A photo shoot at a saree store unexpectedly transformed a young woman's self-confidence and perception of beauty.",
    content: `A Photographer’s Unexpected Lesson on Beauty and Self-Perception

    As a photographer, I’ve always believed that my job is to capture moments—not just poses. But one day, during a routine shoot at Sudarshan Family Store (a charming saree shop), I witnessed something extraordinary: a photograph didn’t just freeze a memory; it transformed how a young woman saw herself.

    Recently, I was on a shoot at Sudarshan Family Store, a well-known saree shop, to capture customer testimonials. While I was working, I noticed a young woman named Varsha who had come in with her sister. They were shopping for a saree for her cousin's wedding.

    Varsha caught my attention because she was holding a beautiful necklace, carefully trying to find a saree that would complement it. After browsing for a while, she selected two sarees but hesitated — she wanted to try them on before making a final decision.

    The store didn’t have a trial facility, but I wanted to help. I spoke to the storekeeper, and we worked it out — we selected the sarees from the third floor and brought them down to the second floor where she could drape them with some assistance.

    When she arrived, Varsha was dressed casually in jeans and a t-shirt. But once she wore the saree and let her hair down, everything changed — she looked absolutely gorgeous. The transformation was striking, and I instinctively captured a few shots of that moment.

    Later, I edited the photos and sent them to her. She messaged me with an emotional response. Naturally, she had a few pimples on her face, but in the edited images, her skin looked flawless. She told me, “I look so good… I wish my face always looked like this.”

    That moment stayed with me. She shared that she had never paid much attention to her face before — but now, inspired by the photo, she felt motivated to take better care of herself. It wasn’t just about the clear skin — it was about seeing herself in a new light.

    That’s when I realized once again: photography can do more than capture beauty — it can build confidence, spark self-love, and change how someone sees themselves.

    This shoot wasn’t just about sarees. It was about a moment of transformation — and I’m grateful I got to witness and capture it.

    That day, I didn’t just take a photo—I gave Varsha a mirror that reflected her best self. And that’s the magic of photography: it doesn’t just capture beauty; it reveals it.`,
  },
];

const modalTitleColors = ["text-pink-600", "text-teal-600", "text-purple-600"];
const modalSubtitleColors = ["text-pink-500", "text-teal-500", "text-purple-500"];

export default function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedBlog ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedBlog]);

  return (
    <>
    <div className="bg-black px-6 py-35 md:px-16 lg:px-28 relative">
      <section>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Photography</h2>
            <p className="italic text-xl text-gray-300 mt-1">Related Blog</p>
          </div>
          <p className="text-gray-400 max-w-xl mt-6 md:mt-0 text-sm sm:text-base">
            We’re deeply passionate about{" "}
            <strong className="text-white">capturing your lovely memories in cameras</strong> and
            conveying your love for every moment of life as a whole.
          </p>
        </div>

       
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5 flex flex-col flex-grow">
                <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                  {blog.date}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2 leading-snug">{blog.title}</h3>
                <p className="text-sm text-gray-400 mb-1">By {blog.author}</p>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{blog.summary}</p>
                <div className="mt-auto">
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Know More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

       
        {selectedBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
            <div className="bg-white max-w-2xl w-full rounded-xl overflow-hidden shadow-lg relative max-h-[90vh] flex flex-col">
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold z-10"
              >
                &times;
              </button>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 overflow-y-auto text-gray-700 text-base whitespace-pre-line">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    modalTitleColors[blogs.indexOf(selectedBlog) % modalTitleColors.length]
                  }`}
                >
                  {selectedBlog.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    modalSubtitleColors[blogs.indexOf(selectedBlog) % modalSubtitleColors.length]
                  }`}
                >
                  By {selectedBlog.author} | {selectedBlog.date}
                </p>
                {selectedBlog.content}
              </div>
            </div>
          </div>
        )}
      </section>

    
      
    </div>
    <Footer />
    </>
  );
}
