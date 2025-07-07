import Container from "../ui/Container";

export default function SkillsStack() {
  return (
    <section id="SkillsStack" className="relative bg-gradient-to-t from-transparent to-white dark:to-black">
      <Container className="flex flex-col min-h-screen items-center justify-center gap-4">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-b from-neutral-200 to-neutral-900 dark:from-neutral-800 dark:to-neutral-100 bg-clip-text text-transparent">
          Skills & Stack
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 h-full w-full gap-4">
          <div className="col-span-2 p-2 h-full w-full bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-xs border rounded-xl border-neutral-400 dark:border-neutral-700 shadow-xs">
            <h1>JS</h1>
          </div>
          <div className="p-2 h-full w-full bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-xs border rounded-xl border-neutral-400 dark:border-neutral-700 shadow-xs">
            <h1>React</h1>
          </div>
          <div className="row-span-2 p-2 h-full w-full bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-xs border rounded-xl border-neutral-400 dark:border-neutral-700 shadow-xs">
            <h1>Next.js</h1>
          </div>
          <div className="row-span-2 p-2 h-full w-full bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-xs border rounded-xl border-neutral-400 dark:border-neutral-700 shadow-xs">
            <h1>Git</h1>
          </div>
          <div className="col-span-2 p-2 h-full w-full bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-xs border rounded-xl border-neutral-400 dark:border-neutral-700 shadow-xs">
            <h1>JS</h1>
          </div>
          <div className="p-2 h-full w-full bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-xs border rounded-xl border-neutral-400 dark:border-neutral-700 shadow-xs">
            <h1>Git</h1>
          </div>
          <div className="col-span-2 p-2 h-full w-full bg-neutral-100/20 dark:bg-neutral-900/20 backdrop-blur-xs border rounded-xl border-neutral-400 dark:border-neutral-700 shadow-xs">
            <h1>Next.js</h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
