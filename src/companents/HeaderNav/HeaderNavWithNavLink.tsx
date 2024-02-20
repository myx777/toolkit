import { NavLink } from "react-router-dom";
import type { ItemProps } from "../../types/headerNav";

/**
 * Компонент, представляющий элемент навигации с использованием NavLink из React Router.
 * 
 * @param {ItemProps} props - Свойства элемента навигации.
 * @param {string} props.label - Метка элемента навигации.
 * @param {string} props.link - Ссылка для перехода по элементу навигации.
 * @returns {JSX.Element} Компонент NavLink с указанной меткой и ссылкой.
 */
const HeaderNavWithNavLink = ({ label, link }: ItemProps): JSX.Element => {
    /**
     * Определяет класс активности для NavLink.
     * 
     * @param {Object} param0 - Объект с информацией об активности.
     * @param {boolean} param0.isActive - Флаг активности элемента навигации.
     * @returns {string} Класс для NavLink в зависимости от активности.
     */
    const active = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? "menu_item__active" : "menu_item";
    };

    return (
        <NavLink to={link} className={active}>
            {label}
        </NavLink>
    );
};

export default HeaderNavWithNavLink;
