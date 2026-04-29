export default function BlogListingPage() {
    const blogs = [
        { title: 'Mastering Next.js Performance', excerpt: 'Improve Core Web Vitals with practical optimization techniques.', category: 'Next.js', date: 'Apr 2026' },
        { title: 'React Patterns for Scalable Apps', excerpt: 'Reusable architecture patterns for growing codebases.', category: 'React', date: 'Apr 2026' },
        { title: 'TypeScript Tips Every Dev Should Know', excerpt: 'Write safer, cleaner code with advanced TS features.', category: 'TypeScript', date: 'Apr 2026' },
        { title: 'SEO Guide for Modern Web Apps', excerpt: 'Rank better with technical SEO strategies for SPAs and SSR.', category: 'SEO', date: 'Apr 2026' },
        { title: 'Building Fast Ecommerce Frontends', excerpt: 'Create conversion-focused storefront experiences.', category: 'Ecommerce', date: 'Apr 2026' },
        { title: 'Animations with Framer Motion', excerpt: 'Add smooth interactions that feel delightful.', category: 'UI', date: 'Apr 2026' },
        { title: 'API Integration Best Practices', excerpt: 'Reliable data fetching, caching, and error handling.', category: 'API', date: 'Apr 2026' },
        { title: 'Frontend Interview Prep Roadmap', excerpt: 'Key topics and projects to crack frontend interviews.', category: 'Career', date: 'Apr 2026' }
    ];
    return (
        <div className='min-h-screen bg-slate-50 text-black p-6 md:p-10'>
            <div className='mx-auto'>
                <div className='mb-2 flex flex-col md:flex-row gap-4 md:items-center md:justify-between'>
                    <div><h1 className='text-4xl font-bold'>Blogs</h1><p className='text-slate-600 mt-2'>Insights, tutorials, and developer resources.</p></div>
                    <input placeholder='Search blogs...' className='rounded-2xl border px-4 py-2 bg-white shadow-sm' />
                </div>
                <div className="blogs-container">
                    <div className="mx-auto">
                        <div className="mb-2 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                            <div><h1 className='text-4xl font-bold'>Blogs</h1><p className='text-slate-600 mt-2'>Insights, tutorials, and developer resources.</p></div>
                            <input placeholder='Search blogs...' className='rounded-2xl border px-4 py-2 bg-white shadow-sm' />
                        </div>
                        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
                            {blogs.map((blog, i) => <div key={i} className='bg-white rounded-2xl shadow-sm p-5 hover:shadow-lg transition'>
                                <div className='text-xs font-semibold '>{blog.category}</div>
                                <h2 className='text-xl font-semibold mt-2'>{blog.title}</h2>
                                <p className=' text-sm mt-3'>{blog.excerpt}</p>
                                <div className='mt-4 flex items-center justify-between text-sm'><span>{blog.date}</span><button className='px-3 py-1 rounded-xl bg-slate-900 text-white'>Read</button></div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 md:mt-6'></div>
        </div>
    );
}