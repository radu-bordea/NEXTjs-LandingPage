import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="flex min-h-screen items-center py-24">
      <div className="mx-auto max-w-5xl px-6 text-muted-foreground">
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground pb-2">
              Projects
            </h1>
            <hr className="border-border" />
          </div>

          <p className="max-w-2xl">
            Here are some example projects demonstrating the type of modern,
            fast and user-friendly web applications we build. Images are
            placeholders — you can replace them with real screenshots anytime.
          </p>

          <div className="grid gap-10 md:grid-cols-3 pt-4">
            {/* PROJECT 1 */}
            <article className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
              <div className="w-full h-48 relative">
                <Image
                  src="/assets/demo1.png"
                  alt="School Management Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  School Management Platform
                </h2>
                <p className="text-sm">
                  A modern school website with dashboard, schedule management,
                  announcements and communication tools for teachers, students
                  and parents.
                </p>
              </div>
            </article>

            {/* PROJECT 2 */}
            <article className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
              <div className="w-full h-48 relative">
                <Image
                  src="/assets/demo2.png"
                  alt="Restaurant Booking Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  Restaurant Website & Booking System
                </h2>
                <p className="text-sm">
                  Clean restaurant website featuring menu display, table
                  reservations, customer booking management and real-time
                  availability.
                </p>
              </div>
            </article>

            {/* PROJECT 3 */}
            <article className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
              <div className="w-full h-48 relative">
                <Image
                  src="/assets/demo3.png"
                  alt="Business Dashboard System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2">
                <h2 className="text-lg font-semibold text-foreground">
                  Business Dashboard / Admin System
                </h2>
                <p className="text-sm">
                  A powerful internal dashboard for managing clients, analytics,
                  performance metrics and workflow — designed for speed and
                  clarity.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
