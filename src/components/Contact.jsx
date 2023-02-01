import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        CONTACT
      </motion.h2>
      <div className="desktop-contact">
        <h2>Contact me!</h2>
        <motion.button
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.75,
            },
          }}
        >
          <a href="">Get my Resume!</a>
        </motion.button>
      </div>
      <form action="">
        <motion.input
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
          type="text"
          placeholder="Name"
        />
        <motion.input
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 3,
            },
          }}
          type="text"
          placeholder="Email"
        />
        <motion.input
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 4,
            },
          }}
          type="text"
          placeholder="Subject"
        />
        <motion.input
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
          type="text"
          placeholder="Message"
        />
      </form>
    </div>
  );
};

export default Contact;
