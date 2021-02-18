import { useState } from "react";

const useLove = () => {
  const [isLoved, setIsLove] = useState(false);

  const handleIsLoveChange = () => setIsLove((prev) => !prev);

  return { isLoved, handleIsLoveChange };
};

export default useLove;
