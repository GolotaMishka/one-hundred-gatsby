import * as React from "react";
import { Layout, WishCard } from "../components";
import "./styles.css";
const figures = ["oval", "rectangleWithRadius", "rectangle", "halfRectangle"];
const getRandomFigureClass = (array, currentIndex) => {
  const figure = figures[Math.floor(Math.random() * figures.length)];
  if (currentIndex % 2 === 0) {
    if (array[currentIndex - 2] && array[currentIndex - 2].figure === figure) {
      return getRandomFigureClass(array, currentIndex);
    }
    return figure;
  } else {
    if (
      (array[currentIndex - 1] && array[currentIndex - 1].figure === figure) ||
      (array[currentIndex - 2] && array[currentIndex - 2].figure === figure)
    ) {
      return getRandomFigureClass(array, currentIndex);
    }
    return figure;
  }
};

const list = [
  {
    title: "Jump down with a parachute",
    description: "Jump from over then 4000 meters",
    imgUrl:
      "https://images.unsplash.com/photo-1615445969492-6894df4a5613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
  },
  {
    title: "Get a private pilot license",
    description:
      "Become a private pilot to be an able to fly on the personal plane",
    imgUrl:
      "https://images.unsplash.com/photo-1615445969492-6894df4a5613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
  },
  {
    title: "Learn Surfing",
    description: "Learn How To Surf",
    imgUrl:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "To Live for 3 months on the Bali",
    description:
      "Spend a winter on the hot beaches of some tropical countries like Bali",
    imgUrl:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "Jump down with a parachute",
    description: "Jump from over then 4000 meters",
    imgUrl:
      "https://images.unsplash.com/photo-1615445969492-6894df4a5613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
  },
  {
    title: "Get a private pilot license",
    description:
      "Become a private pilot to be an able to fly on the personal plane",
    imgUrl:
      "https://images.unsplash.com/photo-1615445969492-6894df4a5613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
  },
  {
    title: "Learn Surfing",
    description: "Learn How To Surf",
    imgUrl:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "To Live for 3 months on the Bali",
    description:
      "Spend a winter on the hot beaches of some tropical countries like Bali",
    imgUrl:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const wishes = list.reduce((result, wish, index) => {
  const figure = getRandomFigureClass(result, index);
  // if(result[index-1] && result[index-1].figure === figure){}
  return [...result, { ...wish, figure }];
}, []);

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
            className={wish.figure}
          />
        ))}
      </section>
    </Layout>
  );
};

export default IndexPage;
