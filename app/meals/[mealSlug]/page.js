import Image from "next/image";
import classes from "./page.module.css";
import { getMeal, getMeals } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
	const meal = await getMeal(params.mealSlug);

	if (!meal) {
		notFound();
	}

	return {
		title: meal.title,
		description: meal.summary,
	};
}

export async function getStaticPaths() {
	const meals = await getMeals();

	const paths = meals.map((meal) => ({
		params: { mealSlug: meal.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export default function MealDetailPage({ params }) {
	if (!params.mealSlug) {
		notFound();
	}

	const meal = getMeal(params.mealSlug);

	if (!meal) {
		notFound();
	}

	meal.instructions = meal.instructions.replace(/\n/g, "<br />");

	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image
						src={`https://sbd-serhii-nextjs-demo-users-image.s3.amazonaws.com/${meal.image}`}
						alt={meal.title}
						fill
					/>
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>{meal.summary}</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{
						__html: meal.instructions,
					}}
				></p>
			</main>
		</>
	);
}
