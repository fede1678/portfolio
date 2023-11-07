const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Acerca
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hola. Soy Federico Peregrin, un gusto conocerte. Por favor, echa
              un vistazo.
            </p>
          </div>
          <div>
            <p>
              Me apasiona crear software de alta calidad que beneficie a quienes
              me rodean. Mi enfoque abarca desde clientes individuales y
              pequeñas empresas hasta grandes corporaciones. ¿Qué harías si
              tuvieras a un experto en software al alcance de tus manos?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
