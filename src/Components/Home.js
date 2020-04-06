import React, { useState } from "react";

export default function Home(props) {
  const [timer] = useState(new Date().getTime());
  console.log(timer);

  return <div>{timer + props.timeout}</div>;
}
