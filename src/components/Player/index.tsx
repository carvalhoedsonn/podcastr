import styles from './styles.module.scss';

export function Player() {
	return (
		<div className={styles.playerContainer}>
			<header>
				<img src="/playing.svg" alt="Tocando agora" />
				<strong>Tocando agora</strong>
			</header>

			
		</div>
	);
}