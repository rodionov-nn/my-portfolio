import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section>
      <Container className="flex flex-col h-[50vh] items-center justify-center text-center">
        <h1 className="text-6xl md:text-9xl font-extrabold">404</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          cupiditate reprehenderit sed accusamus. Maiores quasi cupiditate
          laudantium unde aspernatur nulla eos mollitia quis, doloribus vero
          commodi praesentium asperiores? Quisquam, amet!
        </p>
      </Container>
    </section>
  );
}
