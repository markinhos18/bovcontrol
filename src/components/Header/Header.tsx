import Image from "next/image";


import {
  SHeader,
} from "./style";

import Logo from "../../assets/logo.jpg";

import { NextPage } from "next";

const Header:NextPage = () => {
  return (
    <SHeader>   
        <Image src={Logo} width="60"  alt="Logo BovControl" />
    </SHeader>
  )
};

export default Header;
