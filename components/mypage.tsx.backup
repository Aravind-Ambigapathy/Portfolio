export default function Portfolio(){
  const skills=['React','Next.js','TypeScript','JavaScript','Tailwind CSS'];
  const projects=[
    {title:'E-commerce Platform',desc:'High-performance storefront with SSR and optimized UX.'},
    {title:'Portfolio Website',desc:'Modern responsive personal brand website.'},
    {title:'Dashboard App',desc:'Analytics dashboard with charts and role-based access.'}
  ];
  return (
    <div className='min-h-screen bg-slate-950 text-white p-8'>
      <div className='max-w-5xl mx-auto space-y-10'>
        <section className='text-center space-y-4'>
          <h1 className='text-5xl font-bold'>Aravind Ambigapathy</h1>
          <p className='text-xl text-slate-300'>Senior Frontend Engineer | React.js | Next.js | TypeScript</p>
          <p className='text-slate-400 max-w-2xl mx-auto'>I build fast, scalable and beautiful web experiences with modern frontend technologies.</p>
          <div className='flex gap-3 justify-center'>
            <button className='px-5 py-2 rounded-2xl bg-white text-black font-semibold'>Hire Me</button>
            <button className='px-5 py-2 rounded-2xl border border-slate-600'>View Work</button>
          </div>
        </section>
        <section>
          <h2 className='text-2xl font-semibold mb-4'>Skills</h2>
          <div className='flex flex-wrap gap-3'>
            {skills.map(s=><span key={s} className='px-4 py-2 rounded-full bg-slate-800'>{s}</span>)}
          </div>
        </section>
        <section>
          <h2 className='text-2xl font-semibold mb-4'>Projects</h2>
          <div className='grid md:grid-cols-3 gap-4'>
            {projects.map(p=>(<div key={p.title} className='p-5 rounded-2xl bg-slate-900 border border-slate-800'>
              <h3 className='text-lg font-semibold'>{p.title}</h3>
              <p className='text-slate-400 mt-2'>{p.desc}</p>
            </div>))}
          </div>
        </section>
      </div>
    </div>
  )
}