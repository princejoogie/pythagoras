import { useState } from "react";
import "styles/AboutPythagoras.scss";
import news1 from "assets/test1.png";
import news2 from "assets/test2.png";
import news3 from "assets/test3.png";
import news4 from "assets/test4.png";
import news5 from "assets/test5.png";
import { motion } from "framer-motion";
import { stagger, fadeInLeft, fadeInUp } from "components/animation";

function NewsCard({ item }) {
  return (
    <motion.div variants={fadeInUp} className="aboutPyth__card">
      <img src={item.image} alt="item_image" />
      <div className="aboutPyth__card__description">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </motion.div>
  );
}

function NewsTile({ item }) {
  return (
    <motion.div variants={fadeInUp} className="aboutPyth__tile">
      <img src={item.image} alt="item_image" />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </motion.div>
  );
}

function AboutPythagoras() {
  const [news, setNews] = useState([
    {
      image: news1,
      title: "How Am I Supposed To Drink My Coffee?",
      description:
        "Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...",
    },

    {
      image: news2,
      title: "How To Brew With A Siphon Coffee Maker",
      description:
        "Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook...",
    },
  ]);
  const [tiles, setTiles] = useState([
    {
      image: news3,
      title: "The Tea Room’s Important Role In Turn Of The Century Feminism",
      description:
        "Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses...",
    },
    {
      image: news4,
      title:
        "Coffee Consumption Linked to Improved Outcomes in Colon Cancer Patients",
      description:
        "Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses...",
    },
    {
      image: news5,
      title: "Nespresso Pledges Complete Carbon Neutrality by 2022",
      description:
        "Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses...",
    },
  ]);

  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      exit="exit"
      className="aboutPyth app__container"
    >
      <motion.h1 variants={fadeInLeft}>About Pythagoras</motion.h1>
      <div className="divider" />
      <div className="spacer-25" />

      <motion.h3 variants={fadeInUp}>Our Story</motion.h3>
      <motion.p variants={fadeInUp}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        consequuntur est alias vitae error sit laboriosam aliquam quia adipisci
        nihil esse, maxime doloribus suscipit, ut maiores, quis repudiandae
        omnis odit!Aperiam assumenda aspernatur, illum voluptas nesciunt ratione
        omnis rerum tempore porro veniam. Magnam eos exercitationem, voluptatum
        dolor adipisci, numquam suscipit reprehenderit iste vitae eaque,
        perferendis deleniti similique doloremque? Tempora, consectetur.
      </motion.p>

      <div className="spacer-25" />
      <motion.img
        variants={fadeInUp}
        src={news5}
        alt="pythagoras_image"
        height={400}
      />
      <div className="spacer-25" />

      <motion.h3 variants={fadeInUp}>Our Coffee</motion.h3>
      <motion.p variants={fadeInUp}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste saepe
        eveniet quas voluptatem natus! Dolorum velit explicabo, porro voluptatum
        nam vel adipisci suscipit dicta dolore praesentium similique soluta ipsa
        sint. Hic, animi, neque ducimus necessitatibus ad quaerat repellendus
        voluptate asperiores debitis quod incidunt culpa quasi sint laboriosam!
        Quo tempora, dolor repellendus a enim sit esse autem soluta suscipit,
        minima ipsum! Quos doloribus accusamus corrupti dolores repellendus
        facilis a velit eligendi porro amet, laboriosam eum. Quos neque eius,
        accusamus tempore adipisci possimus amet vitae, aliquam deleniti rem
        ipsum praesentium in a. Sapiente corporis totam obcaecati facilis
        doloremque, consectetur maiores, in reprehenderit minus, fugit
        architecto voluptate cum? Eum cum velit necessitatibus temporibus
        doloremque inventore, nostrum, dignissimos rerum unde qui nemo placeat
        rem? Consequuntur, repellendus quibusdam perferendis nesciunt animi ea.
        Veniam provident nisi et minima eos impedit soluta saepe? Atque
        veritatis corrupti dolorem debitis eaque natus distinctio suscipit ex
        amet iste, cum odit.
      </motion.p>

      <div className="spacer-25" />
      <motion.img
        variants={fadeInUp}
        src={news4}
        alt="pythagoras_image"
        height={400}
      />
      <div className="spacer-50" />

      <motion.h1 variants={fadeInUp}>News</motion.h1>
      <div className="divider" />
      <div className="spacer-25" />

      <div className="aboutPyth__newsGrid">
        {news.map((item, index) => (
          <NewsCard key={"news-" + index} item={item} />
        ))}
      </div>

      <div className="spacer-25" />

      {tiles.map((tile, index) => (
        <NewsTile key={"tile-" + index} item={tile} />
      ))}

      <div className="spacer-100" />
    </motion.div>
  );
}

export default AboutPythagoras;
