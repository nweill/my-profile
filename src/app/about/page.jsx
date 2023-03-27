import { MY_NAME } from "../globals"
import styles from "./page.module.css"

export default function About() {
    const firstName = MY_NAME.split(" ")[0]

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>{`About ${MY_NAME}`}</h1>
            <p className={styles.text}>
                {`${firstName} is a passionate computer programmer with over 20 years of
                experience. He loves exploring new technologies and creating
                innovative solutions. ${firstName} runs a small software company
                specializing in medical billing services.`}
            </p>
        </section>
    )
}
