import { useState } from "react";
import blueFire from '/blue fire.gif';
import redFire from '/red fire.gif';
import { motion } from "framer-motion";

export default function Darkmode() {
  const [isDarkmode, setDarkmode] = useState(false);
  return(
    <div className="darkmode-container">
    <button onClick={() => setDarkmode(!isDarkmode)}>
      <img
        width={50}
        src={isDarkmode ? blueFire : redFire}
      />
    </button>
    <motion.div
      layout={true}
      className={`background ${isDarkmode ? 'nightmode' : null}`}
    />
  </div>
  )
}