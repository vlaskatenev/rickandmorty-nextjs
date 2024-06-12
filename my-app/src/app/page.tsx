import styles from "./page.module.css";
import { CartoonCharacter } from "@/components/CartoonCharacter/CartoonCharacter";
import { getMultipleCharacters } from "@/api/rickAndMorty.service";

async function Home() {
  const characters = await getMultipleCharacters([2,3,4,5,6,7,8,910])  

  return (
    <div className={styles.main}>
      {characters.map(character => <CartoonCharacter key={character.id} character={character} />)}
    </div>
  );
}

export default Home
