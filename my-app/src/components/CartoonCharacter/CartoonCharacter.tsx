import Image from 'next/image'
import cn from 'classnames'
import { IGetCharacter } from '@/interfaces/interfaces'
import styles from './CartoonCharacter.module.scss'
import Link from 'next/link'

interface ICartoonCharacter {
    character: IGetCharacter
    isSmallDescription?: boolean
    width?: number
    height?: number
}

export function CartoonCharacter({character, isSmallDescription, width, height}: ICartoonCharacter) {
    return (
        <div className={styles.root}>
            <Image
                src={character.image}
                width={width}
                height={height}
                alt={character.name}
                className={styles.imageCharacter}
                />
            <div className={cn(styles.infoCharacter, {[styles.smallImageDescription]: isSmallDescription})}>
                <div className={cn(styles.round, {[styles.roundDeadCharacter]: character.status === 'Dead'})}/>
                {character.name}: {isSmallDescription ? '' : character.status} <br/>
                Location: {character.location.name}
                <Link href={'/character/' + character.id} title='Go'>Go</Link>
            </div>
            
        </div>
    )
}