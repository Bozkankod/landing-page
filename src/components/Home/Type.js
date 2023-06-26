import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Yazılım Destek Uzmanı",
          "Learner",
          "Junior Software Developer",
          "Açık Kaynak Sevdalısı",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
