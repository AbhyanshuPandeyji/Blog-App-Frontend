const { useState, useEffect } = require("react");

function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState('');
    const [multiTags, setMultiTags] = useState([]);
    const [filters, setFilters] = useState({}); // For category, author, etc.
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [sort, setSort] = useState('-createdAt'); // Default sort: newest first
  
    useEffect(() => {
      const fetchBlogs = async () => {
        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (tags) params.append('tags', tags);
        if (multiTags.length > 0) {
          multiTags.forEach(tag => params.append('multiTags', tag));
        }
        for (const key in filters) {
          params.append(key, filters[key]);
        }
        if (startDate) params.append('startDate', startDate);
        if (endDate) params.append('endDate', endDate);
        if (sort) params.append('sort', sort);
        params.append('page', currentPage);
        params.append('limit', 10);
  
        const res = await fetch(`/api/test?${params.toString()}`);
        const data = await res.json();
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      };
  
      fetchBlogs();
    }, [currentPage, search, tags, multiTags, filters, startDate, endDate, sort]);
  
    const handleMultiTagChange = (e) => {
        const selectedTags = Array.from(e.target.selectedOptions, option => option.value);
        setMultiTags(selectedTags);
    };
  
  
    return (
      <div>
        {/* Search */}
        <input type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
  
        {/* Tags */}
        <input type="text" placeholder="Tag" value={tags} onChange={e => setTags(e.target.value)} />
  
        {/* Multi-tags */}
        <select multiple value={multiTags} onChange={handleMultiTagChange}>
            <option value="javascript">Javascript</option>
            <option value="react">React</option>
            <option value="mongodb">MongoDB</option>
            {/* ... more tags */}
        </select>
  
        {/* Other filters */}
        <input
          type="text"
          placeholder="Category"
          onChange={e => setFilters({ ...filters, category: e.target.value })}
        />
        {/* Add more filter inputs as needed (author, etc.) */}
  
        {/* Date Range */}
        <input type="date" onChange={e => setStartDate(e.target.value)} />
        <input type="date" onChange={e => setEndDate(e.target.value)} />
  
        {/* Sorting */}
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="-createdAt">Newest First</option>
          <option value="createdAt">Oldest First</option>
          {/* Add other sorting options */}
        </select>
  
        {/* Blog List */}
        <ul>
          {blogs.map(blog => (
            <li key={blog._id}>
              <h3>{blog.title}</h3>
              <p>{blog.content.slice(0, 200)}...</p> {/* Display a snippet */}
              {/* ... other blog details */}
            </li>
          ))}
        </ul>
  
        {/* Pagination */}
        {/* ... (your pagination component) */}
      </div>
    );
  }