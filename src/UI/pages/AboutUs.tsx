function AboutUs() {
  return (
    <div className="p-5 md:px-20 xl:px-50 lg:py-20 text-[18px] flex flex-col gap-10">
      <div className="relative py-3 px-2 bg-[#525252] rounded-t-[20%] md:rounded-t-[40%] md:px-20 md:py-15">
        <h1 className=" text-center text-4xl md:text-5xl text-white font-bold mb-6">
          Our Story
        </h1>
        <p className="md:leading-8 pb-4 text-white text-center text-sm md:text-base md:pt-10 lg:w-[80%] mx-auto">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
          rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
          turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus
        </p>
      </div>

      <div
        className="flex flex-col gap-5 md:flex-row justify-center
      items-center md:gap-[50px]"
      >
        <img
          src="/assets/Aboutus/aboutus-1.jpg"
          alt="dessert"
          className="w-full max-w-sm mx-auto rounded-2xl"
        />
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae,
          ut magnam id vero architecto porro voluptatum dolores soluta omnis
          enim obcaecati doloribus nihil corporis, error, tenetur saepe
          aspernatur quos aliquam!Quisque sit amet est et sapien ullamcorper
          pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare
          sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,
          eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
        </p>
      </div>
      <div
        className="flex flex-col gap-5 md:flex-row-reverse justify-center
      items-center md:gap-[50px]"
      >
        <img
          src="/assets/Aboutus/aboutus-2.jpg"
          alt="dessert"
          className="w-full max-w-sm mx-auto rounded-2xl"
        />
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae,
          ut magnam id vero architecto porro voluptatum dolores soluta omnis
          enim obcaecati doloribus nihil corporis, error, tenetur saepe
          aspernatur quos aliquam!Quisque sit amet est et sapien ullamcorper
          pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare
          sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,
          eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
