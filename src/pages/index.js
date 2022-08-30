import * as React from "react";
import { Layout, WishCard } from "../components";
import "./styles.css";

const wishes = [
  {
    title: "Jump down with a parachute",
    description: "Jump from over then 4000 meters",
    color: "#E95800",
  },
  {
    title: "Get a private pilot license",
    description:
      "Become a private pilot to be an able to fly on the personal plane",
    color: "#1099A8",
  },
  {
    title: "Learn Surfing",
    description: "Learn How To Surf",
    color: "#BC027F",
  },
  {
    title: "To Live for 3 months on the Bali",
    description:
      "Spend a winter on the hot beaches of some tropical countries like Bali",
    color: "#0D96F2",
  },
  {
    title: "Get a private pilot license",
    description:
      "Become a private pilot to be an able to fly on the personal plane",
    color: "#1099A8",
  },
  {
    title: "Learn Surfing",
    description: "Learn How To Surf",
    color: "#BC027F",
  },
  {
    title: "To Live for 3 months on the Bali",
    description:
      "Spend a winter on the hot beaches of some tropical countries like Bali",
    color: "#0D96F2",
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <section id="about" className="about">
        <h1 className="title">1000 dreams project</h1>
        <p className="description">
          My name is Mishka and i’m hot boy, who want to take all from this
          life. So, My name is Mishka and i’m hot boy, who want to take all from
          this life. So, My name is Mishka and i’m hot boy, who want to take all
          from this life. So, My name is Mishka and i’m hot boy, who want to
          take all from this life. So, My name is Mishka and i’m hot boy, who
          want to take all from this life. So, My name is Mishka and i’m hot
          boy, who want to take all from this life. So,{" "}
        </p>
      </section>
      <section id="wishes" className="wishes">
        {wishes.map((wish) => (
          <WishCard
            key={wish.title}
            title={wish.title}
            description={wish.description}
          />
        ))}
      </section>
    </Layout>
  );
};

export default IndexPage;
