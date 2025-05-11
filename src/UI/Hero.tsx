function Hero() {
  return (
    <div className="bg-[url(/assets/background.jpg)] bg-cover bg-center h-full flex flex-col items-start md:items-center text-white p-10 md:p-[100px]">
      <h1 className="text-2xl md:leading-20 md:hidden md:text-4xl xl:text-6xl font-bold">
        Baked with Love.
        <br /> Served with a Smile.
      </h1>
      <h1 className="hidden md:block text-3xl leading-20  md:text-4xl xl:text-6xl font-bold">
        Baked with Love. Served with a Smile.
      </h1>
      <p className="w-full md:text-2xl xl:w-[80%] pt-15">
        At The Cake Lab, we create delicious, handcrafted cakes that bring joy
        to every occasion. From elegant wedding tiers to fun birthday treats,
        each cake is made with love, premium ingredients, and a touch of
        creativity. Taste the difference in every slice!
      </p>
    </div>
  );
}

export default Hero;
