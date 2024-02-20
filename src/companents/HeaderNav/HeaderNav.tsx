import type { NavItem } from "../../types/navItem"
import HeaderNavWithNavLink from "./HeaderNavWithNavLink"
import "./style.css"
/**
 * Отображает компонент HeaderNav со списком элементов навигации.
 *
 * @return {JSX.Element} Отрендеренный компонент HeaderNav
 */
const HeaderNav = () => {
  const items: NavItem[] = [
    {
      label: `Search`,
      link: `/`,
    },
    {
      label: `Favorite`,
      link: `/favorites`,
    },
  ]

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {items.map(({ label, link }) => (
          <HeaderNavWithNavLink key={label} label={label} link={link} />
        ))}
      </ul>
    </nav>
  )
}
export default HeaderNav
