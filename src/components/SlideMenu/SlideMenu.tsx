import { FC } from 'react'
import cn from 'classnames'
import { IMenuItem } from '@/interfaces/interfaces'
import ItemMenu from "@/components/ItemMenu/ItemMenu";
import styles from './SlideMenu.module.scss'

type SlideMenuProps = {
  categories: IMenuItem,
  className?: {
    root: string;
  };
}

const SlideMenu: FC<SlideMenuProps> = ({ categories, className }) => (
    <nav className={cn(styles.root, className?.root)}>
        <ul className={styles.menu}>
            {
                categories.map((menuItem) => (
                    <ItemMenu key={menuItem.id} {...menuItem} />
                ))
            }
        </ul>
    </nav>
)

export default SlideMenu
