import Button from "../components/Button";

function Home() {
  return (
    <div className="h-screen w-full">
      <div className="relative h-full text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[3px] brightness-75"
          style={{ backgroundImage: "url(/assets/background.jpg)" }}
        ></div>

        <div className="relative px-6 h-full flex flex-col items-start md:items-center md:justify-evenly gap-[60px] pt-15 md:gap-0 md:pt-0 md:px-[100px]">
          <h1 className="text-2xl md:leading-20 md:hidden md:text-4xl xl:text-6xl font-bold">
            Baked with Love.
            <br /> Served with a Smile.
          </h1>
          <h1 className="hidden md:block text-3xl leading-20  md:text-4xl xl:text-6xl font-bold">
            Baked with Love. Served with a Smile.
          </h1>
          <p className="w-full md:text-2xl xl:w-[80%]">
            At The Cake Lab, we create delicious, handcrafted cakes that bring
            joy to every occasion. From elegant wedding tiers to fun birthday
            treats, each cake is made with love, premium ingredients, and a
            touch of creativity. Taste the difference in every slice!
          </p>
          <Button to="/menu" width="200px" height="45px" fontSize="25px">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
