import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/Pngs/logoonly.png"; // 引入你自己的 Logo

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
`;

// const Text = styled(motion.span)`
//   font-size: ${(props) => props.theme.fontlg};
//   color: ${(props) => props.theme.text};
//   padding-bottom: 0.5rem;
// `;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 3,
      ease: "easeInOut",
    },
  },
};

// const textVariants = {
//   hidden: {
//     opacity: 0,
//     x: -50,
//   },
//   visible: {
//     opacity: 1,
//     x: -5,
//     transition: {
//       duration: 2,
//       delay: 5,
//       ease: "easeInOut",
//     },
//   },
// };

const LogoComponent = () => {
  return (
    <Container>
      <Link to="/">
        {/* 使用 motion.img 来为 Logo 图片应用动画 */}
        <motion.img
          src={Logo}
          alt="Photog_HuHu Logo"
          initial="hidden"
          animate="visible"
          variants={pathVariants}
          style={{ width: "4rem", height: "auto" }} // 调整 Logo 的大小
        />
        {/* <Text variants={textVariants} initial="hidden" animate="visible">
          Photog_HuHu
        </Text> */}
      </Link>
    </Container>
  );
};

export default LogoComponent;
