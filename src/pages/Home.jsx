import React from "react";
import NavMenu from "../Components/NavMenu";
import MainContainer from "../Container/MainContainer";
import Footer from "../Components/Footer";
import { useLoaderData } from "react-router";
import RecentHabitsWrapper from "./Home/RecentHabitsWrapper";

const Home = () => {
  const homeHabits = useLoaderData();
  // console.log(homeHabits);
  return (
    <MainContainer>
      <NavMenu></NavMenu>
      <section className="hero-banner">
        <div className="bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')] bg-cover bg-center h-[500px] flex items-center justify-center text-white">
          <div className="text-center bg-black/50 p-8 rounded">
            <h1 className="text-4xl font-bold mb-4">
              Find Your Perfect Stay at Lighthouse
            </h1>
            <p className="mb-4">Discover luxury rooms at the best price</p>
            <button className="bg-blue-600 px-6 py-2 rounded">
              Explore Rooms
            </button>
          </div>
        </div>
      </section>
      <section className="Feacture">
        <RecentHabitsWrapper homeHabits={homeHabits}></RecentHabitsWrapper>
      </section>
      <section className="Hotel-Animation"></section>
      <section className="news-letter">
        <div className="text-center py-10">
          <h2 className="text-xl font-bold mb-4">Subscribe</h2>

          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-2 mr-2"
          />
          <button className="bg-blue-600 text-white px-4 py-2">
            Subscribe
          </button>
        </div>
      </section>
      <Footer></Footer>
    </MainContainer>
  );
};

export default Home;
