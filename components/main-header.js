import Link from "next/link";
import classes from "@/components/main-header.module.css";

import logoImage from "@/assets/logo.png";

export default function MainHeader() {
	return (
		<header className={classes.header}>
			<Link href="/" className={classes.logo}>
				<img src={logoImage.src} alt="A plate with food on it" />
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
	);
}
