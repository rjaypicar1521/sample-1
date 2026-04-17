const features = ["Crafted Furniture", "Sustainable Material", "Innovative Architects", "Budget Friendly"];

const reasons = [
  {
    title: "25+ Years Experience",
    body: "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit."
  },
  {
    title: "Best Interior Design",
    body: "Sanctus clita duo justo et tempor eirmod magna dolore erat amet."
  },
  {
    title: "Customer Satisfaction",
    body: "Aliqu diam amet diam et eos labore lorem sed tempor."
  }
];

const projects = [
  {
    title: "Kitchen",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Bathroom",
    image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-3ca1b23e7b53?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Living Room",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Furniture",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Renovation",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80"
  }
];

const services = ["Interior Design", "Implement", "Renovation", "Commercial"];
const highlights = [
  { value: "140+", label: "Homes Completed" },
  { value: "32", label: "Design Awards" },
  { value: "98%", label: "Client Satisfaction" }
];

const designers = [
  {
    name: "Boris Johnson",
    image: "https://images.unsplash.com/photo-1542204625-de293a7b9ef3?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Donald Pakura",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Bradley Gordon",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Alexander Bell",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=700&q=80"
  }
];

function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div className="max-w-3xl">
      <h2 className={`mb-2 text-3xl font-bold leading-tight md:text-4xl ${light ? "text-white" : "text-dark"}`}>
        {title}
      </h2>
      {subtitle ? <p className={light ? "text-white/80" : "text-[#5c5c5c]"}>{subtitle}</p> : null}
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white text-[#5f5f5f]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-dark"
      >
        Skip to main content
      </a>

      <header className="border-b border-brand/20 bg-white">
        <div className="mx-auto flex min-h-16 w-[min(1140px,92vw)] items-center justify-between gap-6">
          <a href="#" className="font-['Barlow'] text-3xl font-bold text-dark">
            MMT Corporation
          </a>
          <nav className="hidden items-center gap-6 font-medium text-dark/80 md:flex" aria-label="Primary">
            <a className="hover:text-dark" href="#">
              Home
            </a>
            <a className="hover:text-dark" href="#about">
              About
            </a>
            <a className="hover:text-dark" href="#services">
              Services
            </a>
            <a className="hover:text-dark" href="#projects">
              Projects
            </a>
            <a className="hover:text-dark" href="#contact">
              Contact
            </a>
          </nav>
          <a href="#contact" className="hidden rounded-md bg-dark px-4 py-2 text-sm font-semibold text-white md:inline-block">
            Get A Quote
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="border-b border-brand/20 bg-[linear-gradient(135deg,#f6ffe9_0%,#ecf8b9_42%,#ffffff_100%)] py-14 md:py-18">
          <div className="mx-auto grid w-[min(1140px,92vw)] gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div className="reveal">
              <p className="mb-3 font-['Barlow'] text-lg font-semibold text-brand">MMT Corporation</p>
              <h1 className="mb-4 max-w-[12ch] text-4xl font-bold leading-[1.05] text-dark md:text-[3.45rem]">
                We Make Your Home Better
              </h1>
              <p className="mb-6 max-w-xl text-lg">
                Full-service interior design and renovation support with practical planning, reliable budgets, and clean execution.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="rounded-md bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-deep">
                  View Projects
                </a>
                <a
                  href="#services"
                  className="rounded-md border border-brand-warm/70 bg-white px-5 py-3 font-semibold text-dark hover:bg-[#fff9d9]"
                >
                  Explore Services
                </a>
              </div>
            </div>
            <div className="reveal reveal-delay-1 relative">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=80"
                alt="Modern interior living room"
                className="h-[340px] w-full rounded-lg object-cover md:h-[420px]"
              />
              <div className="absolute -bottom-6 left-5 border border-brand/30 bg-white px-4 py-3 text-sm text-dark shadow-[0_8px_24px_rgba(23,97,57,0.14)]">
                24/7 Project Support
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-brand/20 bg-white py-8">
          <div className="mx-auto grid w-[min(1140px,92vw)] grid-cols-1 gap-5 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <article key={item.label} className={`reveal reveal-delay-${index + 1}`}>
                <p className="font-['Barlow'] text-[2rem] font-bold leading-none text-dark">{item.value}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.08em] text-brand-deep/80">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto grid w-[min(1140px,92vw)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article key={feature} className="reveal rounded-lg border border-brand/25 bg-white p-6">
                <h3 className="text-lg font-semibold text-dark">{feature}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-[linear-gradient(180deg,#ffffff_0%,#f6ffe9_100%)] py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] items-center gap-10 lg:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
              alt="Interior design workspace"
              className="h-full max-h-[520px] w-full rounded-lg object-cover"
              loading="lazy"
            />
            <div>
              <SectionTitle
                title="History Of Our Creation"
                subtitle="Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore."
              />
              <ul className="mt-5 list-inside list-disc space-y-1 text-dark/90">
                <li>Award Winning</li>
                <li>Professional Staff</li>
                <li>24/7 Support</li>
                <li>Fair Prices</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <SectionTitle title="Why People Choose Us" />
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <article key={reason.title} className="reveal rounded-lg border border-brand/20 bg-white p-6">
                  <h3 className="mb-2 text-2xl font-semibold text-dark">{reason.title}</h3>
                  <p>{reason.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[linear-gradient(180deg,#f6ffe9_0%,#fffbe8_100%)] py-16">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <SectionTitle title="Our Latest Projects" subtitle="6 of our latest projects." />
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <figure key={project.title} className="reveal m-0 overflow-hidden rounded-lg border border-brand/20 bg-white">
                  <img src={project.image} alt={project.title} className="h-[260px] w-full object-cover" loading="lazy" />
                  <figcaption className="border-t border-brand/20 px-4 py-3 font-semibold text-dark">{project.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-16">
          <div className="mx-auto grid w-[min(1140px,92vw)] items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle
                title="Call Us Direct 24/7 For Free Consultation"
                subtitle="A practical team for interior design, implementation, and renovation."
              />
              <a href="tel:+0123456789" className="mt-3 inline-block text-3xl font-bold text-brand md:text-4xl">
                +01 234 567 890
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article key={service} className="rounded-lg border border-brand/20 bg-[#fcfff4] p-6">
                  <h3 className="mb-2 text-2xl font-semibold text-dark">{service}</h3>
                  <p>Erat ipsum justo amet duo et elitr dolor est duo eos lorem sed diam.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <SectionTitle title="Our Professional Designers" />
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {designers.map((designer) => (
                <article key={designer.name} className="overflow-hidden rounded-lg border border-brand/20 bg-white">
                  <img src={designer.image} alt={designer.name} className="h-[280px] w-full object-cover" loading="lazy" />
                  <div className="p-4 text-center">
                    <h4 className="mb-1 text-xl font-semibold text-dark">{designer.name}</h4>
                    <p>Architect</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(140deg,#0f2a1c_0%,#1f9d55_58%,#f0c419_100%)] py-16 text-center text-white">
          <div className="mx-auto w-[min(1140px,92vw)]">
            <SectionTitle
              title="Subscribe The Newsletter"
              subtitle="Get project updates and renovation tips in your inbox."
              light
            />
            <form className="mx-auto mt-6 grid max-w-[560px] grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="rounded-md border border-white/20 bg-white px-4 py-3 text-dark outline-none ring-brand/40 focus:ring-2"
              />
              <button type="submit" className="rounded-md bg-dark px-6 py-3 font-semibold text-white hover:bg-brand-deep">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#0f2a1c] pt-14 text-[#d7e6dc]">
        <div className="mx-auto grid w-[min(1140px,92vw)] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="font-['Barlow'] text-3xl font-bold text-white">
              MMT Corporation
            </a>
            <p className="mt-3">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xl font-semibold text-white">Get In Touch</h4>
            <p>123 Street, New York, USA</p>
            <p>+012 345 67890</p>
            <p>info@example.com</p>
          </div>
          <div>
            <h4 className="mb-3 text-xl font-semibold text-white">Popular Link</h4>
            <a className="block py-0.5 hover:text-white" href="#">
              About Us
            </a>
            <a className="block py-0.5 hover:text-white" href="#">
              Contact Us
            </a>
            <a className="block py-0.5 hover:text-white" href="#">
              Privacy Policy
            </a>
          </div>
          <div>
            <h4 className="mb-3 text-xl font-semibold text-white">Our Services</h4>
            <a className="block py-0.5 hover:text-white" href="#">
              Interior Design
            </a>
            <a className="block py-0.5 hover:text-white" href="#">
              Project Planning
            </a>
            <a className="block py-0.5 hover:text-white" href="#">
              Renovation
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 px-4 py-4 text-center text-sm">
          &copy; 2026 MMT Corporation. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
