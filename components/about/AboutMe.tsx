import Link from "@/components/Link";
const AboutMe = () => {
  return (
    <section>
      <h2 id="about" className="scroll-margin-nav">
        <Link className="text-3xl" href="#about">
          About
        </Link>
      </h2>
      <p>
        Hello, my name is <b>Rian Firnanda Irsyadani</b>, you can call me{" "}
        <b>Rian</b> or <b>ann</b> for short. If you&apos;re my school
        friend you maybe know me as <b>yan</b> or <b>ian</b>.
      </p>
      <p>
        I grew up in a small village located in{" "}
        <Link
          className="underline"
          isExternal
          href="https://www.google.com/search?q=bengkulu"
        >
          Bengkulu, Indonesia
        </Link>
        . graduated from{" "}
        <Link
          className="underline"
          isExternal
          href="https://smkn1bengkulu.sch.id/laman/"
        >
          Smkn 1 Kota Bengkulu
        </Link>{" "}
      </p>
      <p>
       I love exploring everything related to technology. 
        {" "}
        Also, I joined many competition such as Competitive programming, and{" "}
        <Link
          isExternal
          className="underline"
          href="https://id.wikipedia.org/wiki/Hackathon"
        >
          Hackathon
        </Link>
        .
      </p>
      <p>
        Outside of software developing thingy, I love playing and{" "}
        <Link
          isExternal
          className="underline"
          href="https://open.spotify.com/user/21xnhzh4qf74t5t4lp2fammai"
        >
          listening music
        </Link>
        .
      </p>
    </section>
  );
};

export default AboutMe;
