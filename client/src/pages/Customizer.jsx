import { useSnapshot } from "valtio";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// state
import state from "../store";

// assets
import { download } from "../assets";

// config
import config from "../config/config";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";

// components
import {
   CustomButton,
   FilePicker,
   ColorPicker,
   AIPicker,
   Tab,
} from "../components";

const Customizer = () => {
   const snap = useSnapshot(state);
   const [first, setfirst] = useState("");

   useEffect(() => {}, []);

   return (
      <AnimatePresence>
         {!snap.intro && (
            <>
               <motion.div
                  key="custom"
                  className="absolute top-0 left-0 z-10"
                  {...slideAnimation("left")}
               >
                  <div className="flex items-center min-h-screen">
                     <div className="editortabs-container tabs">
                        {EditorTabs.map((tab) => (
                           <Tab
                              key={tab.name}
                              tab={tab}
                              handleClick={() => {}}
                           />
                        ))}
                     </div>
                  </div>
               </motion.div>
               <motion.div
                  className="absolute top-5 right-5 z-10"
                  {...fadeAnimation}
               >
                  <CustomButton
                     type="filled"
                     title="Go Back"
                     handleClick={() => (state.intro = true)}
                     customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                  />
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
};

export default Customizer;
