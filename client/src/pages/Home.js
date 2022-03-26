import React from "react";
import "../CSS Files/Home.css";
import Image1 from "../Gallery/Stock Photos/bloom-of-orchid-2021-08-26-15-58-27-utc.jpg";
import Image2 from "../Gallery/Stock Photos/close-up-of-thai-orchid-on-a-blurred-background-m-2021-12-14-02-37-59-utc.jpg";
import Image3 from "../Gallery/Stock Photos/banner-of-pink-orchid-macro-with-water-drops-2021-08-27-09-32-39-utc.jpg";

export default function Home() {
  return (
    <div className='csel'>
      <div className='home-banner'>
        <img className='h1-img' src={Image3} alt='' />
        <div className='banner-text'>
          Welcome to the
          <br />
          North Eastern New York Orchid Society
        </div>
      </div>
        <div className='about-container'>
          <div className='about-us'>
            <div className='about-us-p'>
              <p className='about-us-p-header'>About Us</p>
              <p>
                We are a non-profit membership organization chartered by New
                York State and open without restriction to all who are
                interested in orchids. The organization was formed in 1963 by
                orchid lovers in the Capital district who were passionate
                about growing, studying and enjoying orchids. Members range
                for beginner to expert and grow them in a variety of
                conditions, from windowsill to greenhouse.
              </p>
            </div>
            <img className='about-us-img' src={Image1} alt='' />
          </div>
            <div className='about-orchids'>
              <div className='about-orchids-p'>
                <p className='about-orchids-p-header'>About Orchids</p>
                <p>
                  Contrary to popular belief, orchids are not difficult to grow
                  once we understand their requirements. The majority are
                  epiphytes, meaning attached to trees or structures, and
                  require humid but fresh air surrounding their roots. Many are
                  terrestrial or lithophytes, growing in rich humusy soils or
                  across rocks. Members of this largest of all flowering plant
                  families are found in every environment on earth. In fact,
                  there are many more native orchid species found in Alaska than
                  in Hawaii.
                </p>
                <br />
                <p>
                  A common misconception is that orchids must be kept hot with
                  high humidity. Actually, most will thrive in the same
                  comfortable conditions of your home. A greenhouse is not
                  required. Growing them well, however, is a combination of
                  proper light, temperature, moisture and nutrients depending on
                  which type of orchid they are and where in their natural
                  habitat they are found originally. As a rule of thumb, hybrid
                  orchids are less demanding than the species.
                </p>
              </div>
                <img className='about-orchids-img' src={Image2} alt='' />
            </div>
        </div>
    </div>
  );
}
