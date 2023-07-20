import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import {
   headContainerAnimation,
   headContentAnimation,
   headTextAnimation,
   slideAnimation,
} from "../config/motion";

import state from "../store";
import { CustomButton } from "../components";

const Home = () => {
   const snap = useSnapshot(state);

   return (
      <AnimatePresence>
         {snap.intro && (
            <motion.section className="home" {...slideAnimation("left")}>
               <motion.header {...slideAnimation("down")}>
                  <img
                     src="./threejs.png"
                     alt="logo"
                     className="w-8 h-8 object-contain"
                  />
               </motion.header>
               <motion.div className="home-content" {...headContentAnimation}>
                  <motion.div className="head-text" {...headTextAnimation}>
                     <h1>
                        LET'S
                        <br className="hidden xl:block" /> DO IT
                     </h1>
                  </motion.div>
                  <motion.div
                     className="flex flex-col gap-5"
                     {...headContentAnimation}
                  >
                     <p className="max-w-md font-normal text-gray-500">
                        Create your unique and exclusive with our brand-new 3D
                        customization tool.
                        <strong> Unleash your imagination</strong> and define
                        your own style
                     </p>

                     <CustomButton
                        type="filled"
                        title="Customize it"
                        handleClick={() => (state.intro = false)}
                        customStyles="w-fit px-4 py-2.5 font-bold text-sm "
                     />
                  </motion.div>
               </motion.div>
            </motion.section>
         )}
      </AnimatePresence>
   );
};

export default Home;
