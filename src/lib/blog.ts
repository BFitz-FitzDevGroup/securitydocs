import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  content: string;
}

// Check if post should be visible based on date (PST)
function isPublished(dateString: string): boolean {
  const postDate = new Date(dateString + 'T00:00:00-08:00'); // PST midnight
  const now = new Date();
  
  // Convert current time to PST
  const pstNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
  
  return postDate <= pstNow;
}

export function getAllBlogPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        category: data.category || '',
        readTime: data.readTime || '5 min read',
        author: data.author || 'SecurityDocs Team',
        content,
      };
    })
    // Filter out future-dated posts
    .filter((post) => isPublished(post.date));

  // Sort by date (newest first)
  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const post = {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      category: data.category || '',
      readTime: data.readTime || '5 min read',
      author: data.author || 'SecurityDocs Team',
      content,
    };

    // Check if post should be visible
    if (!isPublished(post.date)) {
      return null; // This will trigger 404 in the page component
    }

    return post;
  } catch (error) {
    return null;
  }
}