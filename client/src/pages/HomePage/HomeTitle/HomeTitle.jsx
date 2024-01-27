import styles from './HomeTitle.module.css';
const HomeTitle = () => {
    return(
        <section className={styles.title}>
        <div className={styles.backgroundImage}>
            <div className={styles.titleFlex}>
                <div className={styles.titleText}> 
                    <h1>Elev<span>ai</span>te Analytics</h1>
                    <h3>Taking sports analysis to new heights</h3>
                </div>
            </div>
        </div>
    </section>
    )
};

export default HomeTitle;