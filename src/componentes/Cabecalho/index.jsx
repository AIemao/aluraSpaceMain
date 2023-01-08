import logo from './logo.png'
import styles from './Cabecalho.module.scss'
import {BsSearch} from 'react-icons/bs'

export default function Cabecalho(){
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo do Alura Space" />
      <div className={styles.cabecalho__container}>
        <input className={styles.cabecalho__input} type="text"
        placeholder="O que você procura?" />
        <BsSearch alt="ícone de lupa" />
      </div>
    </header>
  )
}