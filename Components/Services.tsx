const Services = () => {
  return (
    <section id="services" className="flex min-h-screen items-center py-24">
      <div className="mx-auto max-w-5xl px-6 text-muted-foreground">
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground pb-2">
              Services
            </h1>
            <hr className="border-border" />
          </div>

          <div className="space-y-4">
            <p>
              We are a young, passionate and dynamic development team focused on
              building beautiful, fast and reliable digital experiences. Our
              mission is to deliver modern solutions that not only look great
              but work flawlessly.
            </p>

            <p>
              With a strong passion for clean code, performance, and usability,
              we create web applications that feel smooth, intuitive, and
              professional. Every project we take on is crafted with attention
              to detail and a commitment to quality.
            </p>

            <p>
              We are introducing a new approach:{" "}
              <span className="font-medium">client-focused development</span>.
              That means understanding your goals, designing solutions around
              your needs, and delivering results quickly without sacrificing
              quality.
            </p>

            <p>
              Our team works across{" "}
              <span className="font-medium">
                UI/UX, frontend, backend, and project management
              </span>{" "}
              to ensure every part of your project flows smoothly from idea to
              launch.
            </p>

            <p>
              Whether you need a fast landing page, a custom application,
              internal tools, or long-term development support — we provide
              trustworthy, transparent and high-quality services built for the
              modern web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
