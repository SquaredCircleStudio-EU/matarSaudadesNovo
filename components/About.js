import Image from "next/image";
import AboutImg from "../assets/img/about-us.jpg";

export default function About() {
  return (
    <section className="about-us mx-auto px-10 py-24 lg:max-w-screen-xl lg:px-0 lg:py-36">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        <div className="mb-12 lg:mb-0">
          <p className="mb-2 text-left text-xl font-normal uppercase text-gray-400">
            História, Propósito e visão
          </p>
          <p className="mb-2 text-left text-5xl font-bold text-red-600">
            A nossa Origem <br />e os nossos costumes
          </p>
          <p className="mb-2 max-w-lg text-left text-xl font-normal leading-9 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Ultrices montes, pharetra aliquet arcu consectetur nulla non vitae
            at. Velit sed vulputate in venenatis neque sed. Eget tempus at
            tristique mattis. Cursus lectus ornare at id scelerisque fringilla.
            Blandit viverra sit nulla libero accumsan, ultrices urna porttitor
            faucibus.
          </p>
          <div className="mt-4 text-left">
            <button class="btn btn-red hover:bg-green-200 focus:bg-yellow-500">
              Sobre nós
            </button>
          </div>
        </div>
        <div>
          <Image
            src={AboutImg}
            alt="História, Propósito e visão"
            width={700}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}