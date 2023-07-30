import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.leftHalf}>
            <div className={styles.mixPanels}>
                <div className={styles.mixPanel}>
                </div>
                <div className={styles.mixPanel}>
                </div>
            </div>
            <div className={styles.controlBar}>

            </div>
        </div>
        <div className={styles.playlistBar}>
            <div className={styles.title}>PLAYLIST</div>
        </div>
    </main>
  )
}
