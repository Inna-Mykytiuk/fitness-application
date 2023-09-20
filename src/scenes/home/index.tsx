import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";

type Props = {
  children?: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const flexBetween = "flex flex-col items-center justify-between";

  return (
    <section
      id="home"
      className="gap-16 bg-gray20 py-10 md:h-full md:pb-0"
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        {/* IMAGE AND MAIN HEADER */}
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
          {/* MAIN HEADER */}
          <div className="z-10 mt-32 md:basis-3/5">
            {/* HEADINGS */}
            <div className="md:-mt-20">
              <div className="">
                <div>
                  <img alt="home-page-taxr" src={HomePageText}></img>
                  {/* <p className="text-[86px] text-rose800 font-black font-family" >Mini Forest</p>
              <p className="text-[42px] text-rose800 font-thin tracking-[5px]" >Evolutionary fitness.</p> */}
                </div>
              </div>

              <p className="mt-8 font-montserrat text-md ">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                Studios to get the Body Shapes That you Dream of.. Get Your Dream
                Body Now.
              </p>
            </div>

            {/* ACTIONS */}
            <div>
              <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
            </div>
            <AnchorLink className="text-sm font-bold text-primary500 underline hover:text-secondary500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}>
              <p>Learn More</p>

            </AnchorLink>
          </div>

          {/* IMAGE */}
          <div>
            <img alt="home-page-graphic" src={HomePageGraphic}></img>
          </div>
        </div>
        {/* SPONSORS */}
        {isAboveMediumScreens && (
          <div className="h-[150px] w-full bg-primary100 py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between gap-8">
                <img alt="redbull-sponsor" src={SponsorRedBull} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
              </div>
            </div>
          </div>
        )}
      </div>


    </section>
  )
}

export default Home