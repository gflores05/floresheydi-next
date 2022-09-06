import NavLink from '@components/NavLink'
import cx from 'classnames'
import { useState } from 'react'
import styles from './Menu.module.sass'

export default function Menu() {
  const [visible, setVisible] = useState(false)

  const toggleMenu = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault()
    evt.stopPropagation()

    setVisible(!visible)
  }

  return (
    <>
      <nav className={styles.menuButton}>
        <ul>
          <li>
            <a href="#menu" onClick={toggleMenu}>
              Menu
            </a>
          </li>
        </ul>
      </nav>
      <nav
        id="menu"
        className={cx(styles.menu, visible && styles.isMenuVisible)}
      >
        <div className={styles.inner}>
          <h2>Menu</h2>
          <ul>
            <li>
              <NavLink href="/" activeClassName={styles.active}>
                <a>Inicio</a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/catalog" activeClassName={styles.active}>
                <a>Catalogo</a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/contact" activeClassName={styles.active}>
                <a>Contacto</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <a className={styles.close} onClick={toggleMenu} href="#menu">
          Close
        </a>
      </nav>
    </>
  )
}
