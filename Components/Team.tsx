import Image from "next/image";

const Team = () => {
  return (
    // TEAM 
    <section id="team" className="flex min-h-screen items-center py-24">
      <div className="mx-auto max-w-5xl px-6 text-muted-foreground">
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground pb-2">
              Team
            </h1>
            <hr className="border-border" />
          </div>

          <p className="">
            Behind the solutions is a small developer team combining UX,
            frontend, and backend experience. We collaborate closely to design,
            build, and maintain tailored systems for our clients.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Bogdana */}
            <article className="flex flex-col items-center rounded-2xl border border-border bg-card/40 p-6 shadow-sm backdrop-blur">
              <div className="mb-4">
                <Image
                  src="/assets/bogdana.jpg"
                  alt="Sorinescu Bogdana"
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-full object-cover shadow-md"
                />
              </div>
              <h2 className="text-lg font-semibold text-foreground text-center">
                Sorinescu Bogdana
              </h2>
              <p className="text-sm font-medium text-primary text-center">
                UX/UI Developer &amp; Project Manager
              </p>
              <p className="mt-3 text-sm text-center">
                Leads the overall product experience and coordinates the project
                from idea to delivery, ensuring both business goals and user
                needs are met.
              </p>
            </article>

            {/* Radu */}
            <article className="flex flex-col items-center rounded-2xl border border-border bg-card/40 p-6 shadow-sm backdrop-blur">
              <div className="mb-4">
                <Image
                  src="/assets/radu.jpg"
                  alt="Bordea Radu"
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-full object-cover shadow-md"
                />
              </div>
              <h2 className="text-lg font-semibold text-foreground text-center">
                Bordea Radu
              </h2>
              <p className="text-sm font-medium text-primary text-center">
                Next.js Developer
              </p>
              <p className="mt-3 text-sm text-center">
                Focused on modern web frontends with Next.js, delivering fast,
                accessible, and maintainable user interfaces.
              </p>
            </article>

            {/* Mihai */}
            <article className="flex flex-col items-center rounded-2xl border border-border bg-card/40 p-6 shadow-sm backdrop-blur">
              <div className="mb-4">
                <Image
                  src="/assets/mihai.jpg"
                  alt="Sorinescu Mihai"
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-full object-cover shadow-md"
                />
              </div>
              <h2 className="text-lg font-semibold text-foreground text-center">
                Sorinescu Mihai
              </h2>
              <p className="text-sm font-medium text-primary text-center">
                .NET Developer
              </p>
              <p className="mt-3 text-sm text-center">
                Builds and maintains the backend and integrations using .NET,
                ensuring stability, security, and performance.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
