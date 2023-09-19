import React from "react";
import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className=" max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        AI-Powered Prompts is an AI powered prompts platform that helps you to
        create and share AI powered prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
