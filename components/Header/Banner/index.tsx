import Sky from '@components/Header/Sky'
import Image from 'next/image'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <div className={styles.heydiBanner}>
      <Sky></Sky>
      <div className={styles.heydiLogo}>
        <a href="/" className={styles.logo}>
          <span className={styles.symbol}>
            <Image src="/images/logo.png" width={833} height={454} alt="" />
          </span>
        </a>
      </div>
      <div className={styles.heydiShopRoof}>
        <Image src="/images/shoproof.png" width={1602} height={260} alt="" />
      </div>
    </div>
  )
}
