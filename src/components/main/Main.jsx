import React from "react";
import Benify from "./benify/Benify";
import { BENIFYS } from "../../static/Benifys";
import Costumers from "../costumers/Costumers";

const Main = () => {
  return (
    <div>
      {BENIFYS?.map((item, index) => (
        <Benify
          key={item.id}
          image={item.image}
          title={item.title}
          desc={item.desc}
          btnText={item.btnText}
          reverse={index % 2 !== 0}
        />
      ))}
      <Costumers />
    </div>
  );
};

export default Main;
