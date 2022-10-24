import React from "react";
import { BubblyLink } from "react-bubbly-transitions";

const Nav = () => {
	return (
		<nav
			className="animate-in"
			style={{
				animationDelay: "800ms",
			}}
		>
			<BubblyLink to="/">Docs</BubblyLink>
			<BubblyLink to="/about">About</BubblyLink>
			<BubblyLink to="/contact">Contact</BubblyLink>
		</nav>
	);
};

export default Nav;
