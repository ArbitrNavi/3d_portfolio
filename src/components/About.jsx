import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../HOC";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
				variants={fadeIn("right", "spring", 0.5 * index, 0.74)}>
				<div
					className="bg-tertiary rounded-2xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}>
					<img src={icon} alt={title} className="w-16 h-16" />
					<h3 className="text-center text-white text-[20px] font-bold">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				className="text-secondary mt-4 text-[17px] max-w-3xl leading-[30px]"
				variants={fadeIn("", "", 0.1, 1)}>
				I am a full stack developer with experience in JavaScript
				(React) and PHP (LARAVEL). I write full-fledged extensible
				applications. I work with MySQL databases.
			</motion.p>
			<div className="mt-20 flex justify-center flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
