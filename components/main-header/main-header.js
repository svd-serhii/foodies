import Link from "next/link";
import classes from "./main-header.module.css";

import logoImage from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link href="/" className={classes.logo}>
					<Image src={logoImage} alt="A plate with food on it" priority />
					NextLevel Food
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<Link href="/meals">Browse Meals</Link>
						</li>
						<li>
							<Link href="/community">Foodies Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
