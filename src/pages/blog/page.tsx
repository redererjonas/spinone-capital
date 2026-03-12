import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogData } from '@/mocks/blogData';

const BlogPage = () => {
  const categories = ['Alle', 'Marktanalyse', 'Regulierung', 'Strategie', 'Wirtschaft', 'Technologie', 'Nachhaltigkeit', 'Risikomanagement'];
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const blogPosts = Object.values(blogData);
  const filteredPosts = selectedCategory === 'Alle'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-slate-50">
          {/* Subtle Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white shadow-sm rounded-full border border-slate-200 mb-8"
            >
              <i className="ri-article-line text-primary-600"></i>
              <span className="text-sm text-slate-700 font-medium">Insights & Analysen</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Blog & <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-cyan bg-clip-text text-transparent">News</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Aktuelle Marktanalysen, Kapitalmarkt-News und regulatorische Updates
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base text-slate-400 max-w-2xl mx-auto"
            >
              Bleiben Sie informiert über die neuesten Entwicklungen an den Finanzmärkten
            </motion.p>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Blog Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-12 flex-wrap"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative bg-white shadow-sm rounded-2xl overflow-hidden border border-slate-200 hover:border-primary-300 transition-all duration-500 hover:shadow-lg hover:shadow-primary-500/10"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="relative w-full h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                        <span className="flex items-center space-x-1">
                          <i className="ri-calendar-line text-primary-500"></i>
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <i className="ri-time-line text-primary-500"></i>
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-slate-500 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center space-x-2 text-primary-600 font-semibold group-hover:space-x-3 transition-all duration-300">
                        <span>Weiterlesen</span>
                        <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
