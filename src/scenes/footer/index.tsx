import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">Some info in here</p>
          <p>Cristopher Areche All rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5"> Mass orci senectus</p>
          <p className="my-5"> Mass orci senectus</p>
          <p> Mass orci senectus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"> Mass orci senectus</p>
          <p>(333) 456-2323</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
