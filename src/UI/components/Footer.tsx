import { Link } from "react-router-dom";
function Footer() {
  const socialIcons = [
    { src: "/assets/icons/icons8-instagram.svg", alt: "ins" },
    { src: "/assets/icons/icons8-facebook.svg", alt: "fb" },
    { src: "/assets/icons/icons8-tiktok.svg", alt: "tiktok" },
    { src: "/assets/icons/icons8-wechat.svg", alt: "wechat" },
  ];
  return (
    <footer className=" bg-black p-10 gap-[20px] text-white flex flex-col items-center justify-center md:flex-row md:gap-[50px] md:items-start lg:justify-between lg:items-start">
      <form className="flex flex-col gap-[20px] items-center md:items-start">
        <h2 className="font-semibold text-xl">JOIN THE COMMUNITY</h2>{" "}
        <p>Subscribe and be the first to know about our special launches.</p>
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="bg-white text-black w-[250px] h-[30px] px-2"
            placeholder="Enter your email"
          />
          <button className="cursor-pointer">
            <img src="/assets/icons8-sent-30.png" alt="sent" />
          </button>
        </div>
      </form>

      <div className="text-center md:text-left">
        <h2 className="font-semibold text-xl pb-3">Sitemap</h2>
        <nav className="flex flex-col gap-3">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/menu">Our Cakes</Link>
          <Link to="/contactus">Contact Us</Link>
        </nav>
      </div>
      <div className="flex flex-col items-center md:items-end">
        <h1 className="text-5xl xl:text-7xl  text-right pb-5">The Cake Lab</h1>
        <div className="flex gap-[20px] items-center md:justify-end">
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="w-8 lg:w-10"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
