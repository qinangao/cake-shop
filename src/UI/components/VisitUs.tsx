function VisitUs() {
  return (
    <div
      className="bg-[url(/assets/visitus.jpg)] bg-cover bg-center bg-no-repeat p-10 flex justify-center
    items-center "
    >
      <div className="bg-white w-full md:w-[70%] xl:w-[40%] text-center flex flex-col gap-3.5 py-6 leading-[30px] rounded-2xl">
        <h2 className="text-3xl font-semibold">Visit Us</h2>
        <div>
          <h3 className="text-xl font-medium pb-2">The Cake Lab</h3>
          <p>
            Suite 402, Bldg C<br />
            7896 Lorem Ridge Blvd
            <br />
            Commodo Heights, Civitas LI 90210
            <br />
            +44 7911 123456
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium pb-2">Open Hours</h3>
          <p>
            Monday – Friday: 09:00 AM – 06:00 PM <br />
            Saturday: 10:00 AM – 04:00 PM <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisitUs;
