import Image from 'next/image'
import cx from 'classnames'
import styles from './Sky.module.css'

export default function Sky() {
  return (
    <div className={styles.heydiSky}>
      <div className={cx(styles.heydiCloud, styles.cloud1)}>
        <Image src="/images/clouds/cloud1.png" width={256} height={200} alt="cloud" />
      </div>
      <div className={cx(styles.heydiCloud, styles.cloud2)}>
        <Image src="/images/clouds/cloud2.png" width={409} height={217} alt="cloud" />
      </div>
      <div className={cx(styles.heydiCloud, styles.cloud3)}>
        <Image src="/images/clouds/cloud3.png" width={502} height={128} alt="cloud" />
      </div>
      <div className={cx(styles.heydiCloud, styles.cloud4)}>
        <Image src="/images/clouds/cloud4.png" width={624} height={341} alt="cloud" />
      </div>
      <div className={cx(styles.heydiCloud, styles.cloud5)}>
        <Image src="/images/clouds/cloud5.png" width={497} height={170} alt="cloud" />
      </div>
    </div>
  )
}
