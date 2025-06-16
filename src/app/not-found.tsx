import MainHeroImage from "@/components/ui/MainHeroImage";
import LinkButton from "@/components/ui/LinkButton";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex-grow flex flex-col justify-center items-center text-center py-10 px-4">
  <MainHeroImage />

  <Container className="w-fit max-w-full flex flex-col items-center justify-center p-4 sm:p-6 font-mono rounded-xl border border-neutral-700 bg-neutral-100/30 dark:bg-neutral-900/30 backdrop-blur-sm shadow-xl/20">
    <h1 className="text-9xl font-bold">404</h1>
    <p className="text-4xl mb-4">The page you are looking for was not found.</p>
    <div className="text-2xl flex flex-row items-center gap-4">
      <p>Return to:</p>
      <LinkButton href="/" className="px-2">
        /Home page
      </LinkButton>
    </div>
  </Container>
</section>

  );
}
