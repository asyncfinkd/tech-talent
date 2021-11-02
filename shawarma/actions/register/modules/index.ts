import Header from "ui/header";
import { interest } from "fixtures/register";
import Link from "next/link";
import Head from "next/head";
import SVG from "react-inlinesvg";
import DOMPurify from "isomorphic-dompurify";
import RegisterFooter from "ui/footer/register";
import { registerOwnSVG, registerSVG } from "constants/app/strings";

export default {
  Header,
  interest,
  Link,
  Head,
  SVG,
  DOMPurify,
  RegisterFooter,
  registerOwnSVG,
  registerSVG,
};
