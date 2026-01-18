import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Share2, ArrowLeft, Plus, Edit2, Trash2, Search, Code, Copy, Check } from 'lucide-react';

// Initial blog data
const initialBlogs = [
  {
    id: 4,
    title: 'HTML: Building the Web Foundation',
    description: 'Master HTML tags, semantic elements, forms, accessibility, and document structure.',
    category: 'Tech',
    date: 'Jan 15, 2026',
    author: 'Tech Blogger',
    image: 'https://imgs.search.brave.com/oPyMEEH4f2d4M9k_c_cXNEp8jYKaux5qrLozbVyN7fk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTEv/MzM2LzM5OS9zbWFs/bC9odG1sLXByb2dy/YW1taW5nLXRyYW5z/cGFyZW50LWxvZ28t/ZnJlZS1wbmcucG5n',
    content: 'HTML (HyperText Markup Language) is the fundamental building block of every website on the internet. Understanding HTML is essential for any web developer, designer, or content creator. HTML provides the structure and semantic meaning to web content. Learn about common HTML tags like <div>, <span>, <header>, <footer>, <nav>, and <article>. Master semantic HTML5 elements that improve accessibility and SEO. Create interactive forms with input fields, textarea, select dropdowns, and validation. Implement proper heading hierarchy with <h1> through <h6> tags. Embed multimedia content like images, videos, and audio using appropriate tags. Use meta tags for character encoding, viewport settings, and Open Graph metadata. Learn about accessibility attributes like alt text, ARIA labels, and semantic structure. Understand the difference between block and inline elements. Master linking techniques with anchors and navigation. HTML is the foundation upon which CSS styling and JavaScript interactivity are built.',

  },
  {
    id: 5,
    title: 'CSS: The Art of Web Styling',
    description: 'Learn CSS selectors, layouts, animations, responsive design, and modern styling techniques.',
    category: 'Tech',
    date: 'Jan 15, 2026',
    author: 'Tech Blogger',
    image: 'https://imgs.search.brave.com/i8OIZfAyBVkXgQyV0NrbLUqz9pL_XgEsOkCOXq-vGbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY3NzLXRy/aWNrcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMTAv/Y3NzMy1sb2dvLmpw/Zz9yZXNpemU9MTIw/MCw2MDAmc3NsPTE',
    content: 'CSS (Cascading Style Sheets) transforms plain HTML into visually stunning websites. CSS is responsible for the visual presentation and layout of web pages. Master CSS selectors including element selectors, class selectors, ID selectors, and attribute selectors. Learn the CSS box model with padding, margin, border, and content dimensions. Create complex layouts using Flexbox for one-dimensional layouts and CSS Grid for two-dimensional layouts. Implement responsive design with media queries to make websites work on all screen sizes. Add interactivity with CSS transitions and animations. Use CSS variables (custom properties) for maintainable stylesheets. Master positioning with static, relative, absolute, and fixed positioning. Learn about stacking context with the z-index property. Implement pseudo-classes like :hover, :focus, and :active for interactive effects. Use pseudo-elements like ::before and ::after for creative styling. Understand cascading and specificity rules for writing efficient CSS. Explore modern CSS features like gradients, filters, and transforms. CSS is essential for creating beautiful, responsive, and accessible web experiences.',

  },
  {
    id: 6,
    title: 'JavaScript: Programming the Web',
    description: 'JavaScript fundamentals, DOM manipulation, async programming, ES6+, and best practices.',
    category: 'Tech',
    date: 'Jan 15, 2026',
    author: 'Tech Blogger',
    image: 'https://imgs.search.brave.com/4mPpTNuXrdSfqDrHmvl4x1SzPtUVduRenS_5xN0H7Wg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTEv/MzM2LzM5Ny9zbWFs/bC9qYXZhc2NyaXB0/LXRyYW5zcGFyZW50/LWxvZ28tZnJlZS1w/bmcucG5n',
    content: 'JavaScript is the programming language that brings interactivity to web browsers. It\'s the only language natively supported by all web browsers and has become incredibly powerful. Learn JavaScript fundamentals including variables, data types (strings, numbers, booleans, objects, arrays), operators, and control flow statements. Master functions and understand scope, hoisting, and the global object. Learn about DOM manipulation to dynamically change HTML and CSS. Use event listeners to respond to user interactions like clicks, scrolling, and form submissions. Understand asynchronous programming with callbacks, Promises, and async/await syntax. Learn destructuring, arrow functions, template literals, and spread operators from ES6+. Master array methods like map, filter, reduce, and forEach for functional programming. Work with objects and understand prototypal inheritance. Learn about closures and how they enable data privacy. Implement error handling with try-catch blocks. Understand the event loop and how JavaScript handles asynchronous operations. Learn to use APIs like Fetch for making HTTP requests. Debug code using browser developer tools. JavaScript powers modern single-page applications and is essential for web development.',
 
  },
  {
    id: 7,
    title: 'Cybersecurity & Ethical Hacking Essentials',
    description: 'Learn security vulnerabilities, hacking techniques, penetration testing, and ethical practices.',
    category: 'Tech',
    date: 'Jan 15, 2026',
    author: 'Tech Blogger',
    image: 'https://imgs.search.brave.com/toC7uQboVMqKHHROmCupZXIAQhmuVzMJdcH_zDF1bQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL251Y2Ft/cC1wcm9kdWN0aW9u/LmFwcHNwb3QuY29t/L2Fpc2VvLWJsb2dz/L2NvZGluZy1ib290/Y2FtcC1jeWJlcnNl/Y3VyaXR5L2NvZGlu/Zy1ib290Y2FtcC1j/eWJlcnNlY3VyaXR5/LWV0aGljYWwtaGFj/a2luZy1lc3NlbnRp/YWxzL3RodW1ibmFp/bDAxLndlYnA',
    content: 'Cybersecurity is critical in our digital world. Ethical hacking, also known as penetration testing, is authorized security testing to identify vulnerabilities before malicious hackers do. Understand common web vulnerabilities like SQL injection, cross-site scripting (XSS), cross-site request forgery (CSRF), and man-in-the-middle attacks. Learn about password security, multi-factor authentication, and biometric security. Understand encryption and decryption concepts including symmetric and asymmetric encryption. Master network security concepts like firewalls, VPNs, and intrusion detection systems. Learn about social engineering tactics and how to defend against them. Understand security best practices for developing secure applications. Study common hacking methodologies and tools used in penetration testing. Learn about vulnerability scanning and how to report security issues responsibly. Understand legal and ethical aspects of hacking and cybersecurity. Study famous security breaches and what went wrong. Master secure coding practices and input validation. Learn about security compliance standards like GDPR, HIPAA, and PCI DSS. Cybersecurity professionals are in high demand across all industries.',
   
  },
  {
    id: 8,
    title: 'Operating Systems: How Computers Work',
    description: 'Learn OS fundamentals, processes, memory management, file systems, and system architecture.',
    category: 'Tech',
    date: 'Jan 15, 2026',
    author: 'Tech Blogger',
    image: 'https://imgs.search.brave.com/I24xHLKGciq1cYQ_vGsTfLag9YAYHx4pmzva2y4_1W8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI3LzNi/LzU2LzI3M2I1NjVj/ZmQ5M2EyZTdhNmVk/MjQ2NDZiYzBhMjU0/LmpwZw',
    content: 'An Operating System (OS) is software that manages computer hardware and provides services to applications. Understanding how operating systems work is crucial for system administrators, software developers, and IT professionals. Learn about the kernel and its responsibilities including process management, memory management, and device management. Understand processes and threads, including scheduling algorithms like round-robin, priority-based scheduling, and multi-level queues. Study memory management techniques including segmentation, paging, and virtual memory. Learn about the file system hierarchy and how files and directories are organized. Understand different file systems like NTFS, ext4, APFS, and their advantages. Study process synchronization problems like deadlocks, race conditions, and critical sections. Learn about inter-process communication (IPC) mechanisms like pipes, sockets, and message queues. Understand device drivers and how hardware communicates with the OS. Study interrupt handling and exceptions. Learn about different OS types including Windows, macOS, Linux, and real-time operating systems. Understand the boot process and system startup. Study system calls and how applications communicate with the kernel. Operating systems are the bridge between hardware and user applications.',
    
  }
];

// Navbar Component
function Navbar({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition">
          My Blog
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => setCurrentPage('home')} className={`hover:text-blue-400 transition ${currentPage === 'home' ? 'text-blue-400' : ''}`}>Home</button>
          <button onClick={() => setCurrentPage('blogs')} className={`hover:text-blue-400 transition ${currentPage === 'blogs' ? 'text-blue-400' : ''}`}>All Blogs</button>
          <button onClick={() => setCurrentPage('create')} className={`hover:text-blue-400 transition ${currentPage === 'create' ? 'text-blue-400' : ''}`}>Create</button>
          <button className="hover:text-blue-400 transition text-lg">📋</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 px-4 py-4 space-y-3">
          <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-400">Home</button>
          <button onClick={() => { setCurrentPage('blogs'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-400">All Blogs</button>
          <button onClick={() => { setCurrentPage('create'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-blue-400">Create</button>
        </div>
      )}
    </nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4">Connect with me on social media</p>
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a href="#" className="hover:text-blue-400 transition">🐙</a>
          <a href="#" className="hover:text-blue-400 transition">𝕏</a>
          <a href="#" className="hover:text-blue-400 transition">💼</a>
          <a href="#" className="hover:text-blue-400 transition">📧</a>
        </div>
        <p className="text-sm">&copy; 2026 My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Blog Card Component
function BlogCard({ blog, onView, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-2">
          {blog.category}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
          <span>{blog.date}</span>
          <span>{blog.author}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onView(blog.id)}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition text-sm font-medium"
          >
            Read More
          </button>
          <button
            onClick={() => onEdit(blog.id)}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => onDelete(blog.id)}
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Home Page
function HomePage({ setCurrentPage, blogs }) {
  const latest = blogs.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-xl text-blue-100 mb-8">Exploring Web Development, Cybersecurity</p>
          <button 
            onClick={() => setCurrentPage('blogs')}
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Explore All Posts
          </button>
        </div>
      </div>

      {/* Latest Blogs Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latest.map(blog => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              onView={() => setCurrentPage(`blog-${blog.id}`)}
              onDelete={() => {}}
              onEdit={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Blogs Listing Page
function BlogsPage({ setCurrentPage, blogs, onDeleteBlog, onEditBlog }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">All Blogs</h1>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>All</option>
          <option>Tech</option>
          <option>Lifestyle</option>
          <option>Education</option>
        </select>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              onView={() => setCurrentPage(`blog-${blog.id}`)}
              onDelete={() => onDeleteBlog(blog.id)}
              onEdit={() => onEditBlog(blog.id)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">No blogs found</p>
        )}
      </div>
    </div>
  );
}

// Blog Details Page
function BlogDetailsPage({ blogId, setCurrentPage, blogs }) {
  const blog = blogs.find(b => b.id === parseInt(blogId));
  const [liked, setLiked] = useState(false);

  if (!blog) return <div className="text-center py-20">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={() => setCurrentPage('blogs')}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft size={20} /> Back to Blogs
      </button>

      <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-lg mb-8" />

      <div className="bg-white rounded-lg shadow-lg p-8">
        <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-4">
          {blog.category}
        </span>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        
        <div className="flex justify-between items-center text-gray-600 mb-8 pb-8 border-b">
          <div>
            <p className="font-semibold">{blog.author}</p>
            <p className="text-sm">{blog.date}</p>
          </div>
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-2 ${liked ? 'text-red-500' : 'text-gray-600'} hover:text-red-500 transition`}
          >
            <Heart size={24} fill={liked ? 'currentColor' : 'none'} />
            <span>{blog.likes + (liked ? 1 : 0)}</span>
          </button>
        </div>

        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">{blog.content}</p>
        </div>

        <div className="flex gap-4 pt-8 border-t">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            <Share2 size={20} /> Share
          </button>
        </div>
      </div>
    </div>
  );
}

// Create/Edit Blog Page
function CreateBlogPage({ setCurrentPage, blogs, setBlog, editId }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Tech',
    image: '',
    content: ''
  });

  useEffect(() => {
    if (editId) {
      const blog = blogs.find(b => b.id === editId);
      if (blog) {
        setFormData({
          title: blog.title,
          description: blog.description,
          category: blog.category,
          image: blog.image,
          content: blog.content
        });
      }
    }
  }, [editId, blogs]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setBlog(formData, editId);
    } else {
      setBlog(formData);
    }
    
    setCurrentPage('blogs');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {editId ? 'Edit Blog' : 'Create New Blog'}
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Short description (for preview)"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Tech</option>
              <option>Lifestyle</option>
              <option>Education</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="10"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your blog content here..."
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            {editId ? 'Update Blog' : 'Create Blog'}
          </button>
          <button
            onClick={() => setCurrentPage('blogs')}
            className="flex-1 bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const stored = window.storage ? null : localStorage.getItem('blogs');
    if (stored) {
      setBlogs(JSON.parse(stored));
    } else {
      setBlogs(initialBlogs);
      localStorage.setItem('blogs', JSON.stringify(initialBlogs));
    }
  }, []);

  const handleDeleteBlog = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      const updated = blogs.filter(b => b.id !== id);
      setBlogs(updated);
      localStorage.setItem('blogs', JSON.stringify(updated));
    }
  };

  const handleEditBlog = (id) => {
    setEditId(id);
    setCurrentPage('create');
  };

  const handleSaveBlog = (formData, id = null) => {
    let updated;
    if (id) {
      updated = blogs.map(blog => 
        blog.id === id 
          ? { ...blog, ...formData }
          : blog
      );
    } else {
      const newBlog = {
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        author: 'Tech Blogger',
        likes: 0
      };
      updated = [...blogs, newBlog];
    }
    setBlogs(updated);
    localStorage.setItem('blogs', JSON.stringify(updated));
    setEditId(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="flex-1">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} blogs={blogs} />}
        {currentPage === 'blogs' && <BlogsPage setCurrentPage={setCurrentPage} blogs={blogs} onDeleteBlog={handleDeleteBlog} onEditBlog={handleEditBlog} />}
        {currentPage.startsWith('blog-') && <BlogDetailsPage blogId={currentPage.split('-')[1]} setCurrentPage={setCurrentPage} blogs={blogs} />}
        {currentPage === 'create' && <CreateBlogPage setCurrentPage={setCurrentPage} blogs={blogs} setBlog={handleSaveBlog} editId={editId} />}
      </main>

      <Footer />
    </div>
  );
}
