import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { blogData } from '@/mocks/blogData';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = parseInt(id || '0');
  const post = blogData[blogId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
            <i className="ri-file-unknow-line text-4xl text-white"></i>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Artikel nicht gefunden</h2>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-300"
          >
            <i className="ri-arrow-left-line"></i>
            <span>Zurück zum Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = Object.values(blogData)
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold rounded-full mb-4"
            >
              {post.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-6 text-white/70"
            >
              <span className="flex items-center space-x-2">
                <i className="ri-calendar-line text-primary-300"></i>
                <span>{post.date}</span>
              </span>
              <span className="flex items-center space-x-2">
                <i className="ri-time-line text-primary-300"></i>
                <span>{post.readTime}</span>
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4 mb-12 pb-8 border-b border-slate-200"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary-500 ring-offset-2 ring-offset-white">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{post.author.name}</h3>
            <p className="text-slate-500">{post.author.role}</p>
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-slate-700 leading-relaxed mb-6 text-base"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-slate-200"
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-medium border border-slate-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Share Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center space-x-4 mt-8"
        >
          <span className="text-slate-500 font-semibold">Teilen:</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 hover:bg-primary-600 hover:border-primary-600 text-slate-600 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
            <i className="ri-linkedin-fill text-lg"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 hover:bg-primary-600 hover:border-primary-600 text-slate-600 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
            <i className="ri-twitter-x-fill text-lg"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 hover:bg-primary-600 hover:border-primary-600 text-slate-600 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
            <i className="ri-facebook-fill text-lg"></i>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 hover:bg-primary-600 hover:border-primary-600 text-slate-600 hover:text-white transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
            <i className="ri-mail-line text-lg"></i>
          </button>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-slate-200">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center space-x-2 text-slate-600 hover:text-primary-600 transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
          >
            <i className="ri-arrow-left-line"></i>
            <span className="font-semibold">Zurück zur Übersicht</span>
          </button>

          {blogId < Object.keys(blogData).length && (
            <Link
              to={`/blog/${blogId + 1}`}
              className="flex items-center space-x-2 text-slate-600 hover:text-primary-600 transition-colors duration-300"
            >
              <span className="font-semibold">Nächster Artikel</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          )}
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Ähnliche Artikel
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="group bg-white shadow-sm rounded-2xl overflow-hidden border border-slate-200 hover:border-primary-300 transition-all duration-500 hover:shadow-lg hover:shadow-primary-500/10"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-xs font-semibold rounded-full mb-3">
                      {relatedPost.category}
                    </span>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-slate-500 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default BlogDetail;
