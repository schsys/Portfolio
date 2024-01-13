import { Button, Carousel, Typography } from "@/utils/withMT";
import Image from "next/image";

export default function ImgSlider() {
  return (
    <Carousel transition={{ type: "spring", duration: 2 }} autoplay autoplayDelay={7500} loop className="">
      {/*  */}
      <div className="relative h-full w-full">
        <img
          src={"/img/01-design.jpg"}
          alt="Design and Prototyping"
          className="h-screen w-full object-cover"
        // fill
        />
        <div className="absolute inset-0 grid h-full w-full items-center md:items-end bg-black/80">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-5 text-left text-3xl md:text-4xl lg:text-5xl"
            >
              Design and Prototyping
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="text-left mb-12 opacity-80"
            >
              Every project is unique. <br />For that reason, we create <strong>from scratch </strong>
              the most astonishing designs to fit your needs, not at the inverse. <br />
              <i>Tell us what you need.</i>
            </Typography>
            <div className="flex justify-end gap-2">
              <Button size="lg" color="white">
                let&apos;s talk &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={"/img/02-code.jpg"}
          alt="Development"
          className="h-screen w-full object-cover"
        // fill
        />
        <div className="absolute inset-0 grid h-full w-full items-center md:items-end bg-black/80">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-5 text-left text-3xl md:text-4xl lg:text-5xl"
            >
              Custom Development
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="text-left mb-12 opacity-80"
            >
              Your site needs a revamp? or your store requires an expansion? <br />
              This shouldn&apos;t be stressful. Our team is prepared to build the <strong>Solutions</strong> your business requires.
            </Typography>
            <div className="flex justify-end gap-2">
              <Button size="lg" color="white">
                let&apos;s talk &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={"/img/04-repair.jpg"}
          alt="image 4"
          className="h-screen w-full object-cover"
        // fill
        />
        <div className="absolute inset-0 grid h-full w-full items-center md:items-end bg-black/80">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-5 text-left text-3xl md:text-4xl lg:text-5xl"
            >
              Repair & Maintenance
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="text-left mb-12 opacity-80"
            >
              As a key part of your daily work, your equipments must be maintained periodically
              and carry out preventive actions.<br />
              We&apos;re here to help you <strong>take care of it.</strong>
            </Typography>
            <div className="flex justify-end gap-2">
              <Button size="lg" color="white">
                Know how &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={"/img/03-support.jpg"}
          alt="SEO and Analytics"
          className="h-screen w-full object-cover"
        // fill
        />
        <div className="absolute inset-0 grid h-full w-full items-center md:items-end bg-black/80">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-5 text-left text-3xl md:text-4xl lg:text-5xl"
            >
              SEO & Analytics
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="text-left mb-12 opacity-80"
            >
              Keyword research and search engine optimization is mandatory to get the results your project needs. <br />
              Let&apos;s <strong>boost your site!</strong>
            </Typography>
            <div className="flex justify-end gap-2">
              <Button size="lg" color="white">
                Optimize it &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}