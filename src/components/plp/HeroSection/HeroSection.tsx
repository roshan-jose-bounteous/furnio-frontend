import Typography from "../../common/Typography";
import RightBreadcrumb from "@/public/assets/icons/RightBreadcrumb";

const HeroSection = () => {
  return (
    <div className='h-[328px] bg-[url("/assets/images/HeroBackground.png")] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-4'>
      <Typography
        variant="h1"
        className="font-poppins text-3xl md:text-5xl font-medium"
        text="Shop"
      />

      <div className="flex flex-row items-center justify-center gap-2 ">
        <Typography
          variant="p"
          className="font-poppins text-lg font-medium"
          text="Home"
        />

        <RightBreadcrumb />
        <Typography variant="p" className="font-poppins text-lg" text="Shop" />
      </div>
    </div>
  );
};

export default HeroSection;
