import Image from 'next/image'
import cn from 'classnames'
import { IGetCharacter } from '@/interfaces/interfaces'
import styles from './CartoonCharacter.module.scss'
import Link from 'next/link'
import { ContentField } from '@/shared/ContentField/ContentField'

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
                className={cn(styles.imageCharacter, {[styles.shadowRadius]: !isSmallDescription})}
                />
            
            {isSmallDescription ? <ContentField 
                className={cn(styles.infoCharacter, {[styles.smallImageDescription]: isSmallDescription})} 
                // contentStyle={{color: 'black', backgroundColor: 'rgba(255, 255, 255, 0)'}}
                >
                <div className={cn(styles.round, {[styles.roundDeadCharacter]: character.status === 'Dead'})}/>
                {character.name}: {isSmallDescription ? '' : character.status} <br/>
                Location: {character.location.name}
            </ContentField>: ''}

            {isSmallDescription ? <Link href={'/character/' + character.id} title='Go' className={styles.link} >Go</Link> : ''}
            
        </div>
    )
}