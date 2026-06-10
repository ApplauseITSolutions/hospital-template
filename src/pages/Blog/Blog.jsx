import React, { useState } from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import Breadcrumb from '../../components/common/Breadcrumb';
import Card from '../../components/common/Card';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import { IoCalendarOutline, IoPersonOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { BLOGS } from '../../data/dummyData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const filteredBlogs = BLOGS.filter(
    (blog) => blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-primary-950 text-white py-16 px-6 border-b border-primary-900">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Blog', path: '/blog' }]} />
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">Health Bulletin</h1>
          <p className="text-slate-300 mt-2 max-w-xl">Stay updated with research journals, clinical advice, and wellness bulletins written by our specialists.</p>
        </div>
      </div>

      {/* Search Filter */}
      <section className="py-8 bg-white border-b border-slate-100 px-6">
        <div className="max-w-7xl mx-auto max-w-lg">
          <Input
            placeholder="Search blogs and articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Medical Literature"
          title="Recent Healthcare Discoveries"
          description="Read through simple guides and medical findings compiled by our resident cardiologists, neurologists, and gynecologists."
        />

        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <Card key={blog.id} className="flex flex-col h-full !p-0 overflow-hidden bg-white border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-300">
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-52 object-cover" />

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-semibold">
                    <span className="flex items-center gap-1"><IoCalendarOutline /> {blog.createdAt}</span>
                    <span className="flex items-center gap-1"><IoPersonOutline /> {blog.author}</span>
                  </div>

                  <h3 className="font-bold text-slate-800 text-lg mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-grow">{blog.summary}</p>

                  <Button
                    variant="text"
                    onClick={() => setSelectedBlog(blog)}
                    // icon={<IoArrowForwardOutline />}
                    iconPosition="left"
                    className="text-primary-600 font-bold hover:text-primary-700 w-fit"
                  >
                    Read Full Article
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg font-semibold">No medical bulletins match your search term.</p>
          </div>
        )}
      </section>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <Modal
          isOpen={!!selectedBlog}
          onClose={() => setSelectedBlog(null)}
          title={selectedBlog.title}
          size="lg"
        >
          <div className="space-y-6">
            <img
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
              className="w-full h-80 object-cover rounded-2xl"
            />

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 border-b border-slate-100 pb-4">
              <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full">{selectedBlog.category}</span>
              <span className="flex items-center gap-1"><IoCalendarOutline /> {selectedBlog.createdAt}</span>
              <span className="flex items-center gap-1"><IoPersonOutline /> Authored by {selectedBlog.author}</span>
            </div>

            <div className="text-slate-700 leading-relaxed space-y-4 text-base">
              <p className="font-semibold text-slate-800 md:text-lg italic bg-slate-50 p-4 border-l-4 border-primary-500 rounded-r-xl">
                "{selectedBlog.summary}"
              </p>
              <p>{selectedBlog.content}</p>
              <p>
                In addition, consulting with medical boards ensures that such clinical parameters conform to daily guidelines. Our hospital health desk updates diagnostic frameworks frequently to align with the latest discoveries.
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Blog;
