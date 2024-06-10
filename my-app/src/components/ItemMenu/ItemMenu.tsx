import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { IMenuItem } from '@/interfaces/interfaces';
import styles from './ItemMenu.module.scss';


const ItemMenu: FC<IMenuItem> = ({ type, slug, hover, theme, name, icon, modalId, link, altText }) => {

  const genLinkPath = () => {
    if(type === "categories") return `/categories/${slug}`;
    return `/${slug}`;
  }

  // пока хардкод
  const isActive = true

  const hoverColor = hover ?? ""

  return (
    <li className={styles.root}>
      {
        !theme && (
          <Link href={genLinkPath()} className={styles.link}>
              {
                icon && (
                  <span className={styles.iconWrapper}>
                    <Image
                      src={icon}
                      width={90}
                      height={90}
                      alt={altText}
                      className={styles.icon}
                    />
                    <span className={styles.iconLayer}>{name}</span>
                  </span>
                )
              }
          </Link>
        )
      }
    </li>
  );
};
export default ItemMenu;
