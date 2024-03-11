import Footer from "./FOOTER";
import Navbar from "./NAVBAR";

const Team = () => {
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900">
            There I was again tonight
          forcing laughter, making smiles
            </p>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-3 text-gray-900">
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl font-semibold text-gray-900">
                  Shruthiga K
                </h4>
                <span className="block text-sm ">Developer</span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl font-semibold text-gray-900">
                  Samyukta K
                </h4>
                <span className="block text-sm text-gray-900">Developer</span>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg"
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl font-semibold text-gray-900">
                  Sowndarya S
                </h4>
                <span className="block text-sm text-gray-900">Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Team;
