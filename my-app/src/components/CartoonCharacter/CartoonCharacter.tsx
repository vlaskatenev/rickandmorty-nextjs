import Image from 'next/image'
import cn from 'classnames'
import { IGetCharacter } from '@/interfaces/interfaces'
import styles from './CartoonCharacter.module.scss'
import Link from 'next/link'

interface ICartoonCharacter {
    character: IGetCharacter
}

export function CartoonCharacter({character}: ICartoonCharacter) {
    return (
        <div className={styles.root}>
            <Image
                src={character.image}
                width={250}
                height={250}
                alt={character.name}
                className={styles.imageCharacter}
                />
            <div className={styles.infoCharacter}>
                <div className={cn(styles.round, {[styles.roundDeadCharacter]: character.status === 'Dead'})}/>
                {character.name}: {character.status} <br/>
                Location: {character.location.name}
                <Link href={'/character/' + character.id} title='Go'>Go</Link>
            </div>
            
        </div>
    )
}