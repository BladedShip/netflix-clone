import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterLinks from "./FooterLink";
import FooterLink from "./FooterLink";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="max-w-4xl mx-auto">
      <div id="social-links" className="flex gap-4 p-2">
        <Link
          href={"/"}
          target="_blank"
          referrerPolicy="no-referrer"
          className="p-2"
        >
          <FaFacebookF className="cursor-pointer text-white" size={24} />
        </Link>
        <Link
          href={"/"}
          target="_blank"
          referrerPolicy="no-referrer"
          className="p-2"
        >
          <FaInstagram className="cursor-pointer text-white" size={24} />
        </Link>
        <Link
          href={"/"}
          target="_blank"
          referrerPolicy="no-referrer"
          className="p-2"
        >
          <FaTwitter className="cursor-pointer text-white" size={24} />
        </Link>
        <Link
          href={"/"}
          target="_blank"
          referrerPolicy="no-referrer"
          className="p-2"
        >
          <FaYoutube className="cursor-pointer text-white" size={24} />
        </Link>
      </div>
      <div id="links" className="grid grid-cols-4 py-2">
        <div className="flex flex-col">
          <FooterLink href={"/"} title="Audio and Subtitles" />
          <FooterLink href={"/"} title="Investor Relations" />
          <FooterLink href={"/"} title="Audio Description" />
        </div>
        <div className="flex flex-col">
          <FooterLink href={"/"} title="Help Center" />
          <FooterLink href={"/"} title="Jobs" />
          <FooterLink href={"/"} title="Cookie Preferences" />
        </div>
        <div className="flex flex-col">
          <FooterLinks href={"/"} title="Gift Cards" />
          <FooterLinks href={"/"} title="Terms of Use" />
          <FooterLinks href={"/"} title="Corporate Information" />
        </div>
        <div className="flex flex-col">
          <FooterLinks href={"/"} title="Media Center" />
          <FooterLinks href={"/"} title="Privacy" />
          <FooterLinks href={"/"} title="Contact Us" />
        </div>
      </div>
      <button className="border border-zinc-500 p-2 my-2 text-xs text-zinc-500 hover:text-white trasition">
        Service Code
      </button>
      <p className="text-[12px] text-zinc-500 py-4">
        &copy; 1997 - 2023 Netflix Inc.
      </p>
    </footer>
  );
};

export default Footer;
