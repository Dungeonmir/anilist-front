import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'

export default function Header() {
	const [isVisible, setIsVisible] = React.useState(false)
	const [isHamburgerMenu, setIsHamburgerMenu] = React.useState(false)

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.logo_wrapper}>
					<Link href="/" className={styles.logo}>
						<svg
							className={styles.logo_icon}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 136 24"
							data-t="crunchyroll-horizontal-svg"
							aria-labelledby="crunchyroll-horizontal-svg"
							aria-hidden="false"
							role="img"
						>
							<title id="crunchyroll-horizontal-svg">Логотип Crunchyroll</title>
							<path d="M66.397 6.887c-2.775 0-5.067.25-5.067 2.124v9.317h2.62V9.873c0-.48 1.355-.577 2.097-.577 2.383 0 2.336 1.045 2.336 2.037v6.995h2.602v-7.053c0-3.134-1.552-4.388-4.588-4.388zm66.757 11.449h2.68V2.786h-2.68v15.55zm-5.808 0h2.682V2.786h-2.682v15.55zm-7.589-2.018c-1.594 0-2.603-.59-2.603-3.579 0-2.99 1.009-3.58 2.603-3.58 1.59 0 2.601.59 2.601 3.58s-1.01 3.579-2.6 3.579zm0-9.401c-3.41 0-5.292 2.06-5.292 5.822s1.882 5.822 5.292 5.822c3.406 0 5.29-2.06 5.29-5.822 0-3.761-1.884-5.822-5.29-5.822zM107.52 8.34v9.995h2.684V9.903c0-.66 1.646-.64 3.141-.663V6.894s-5.825-.243-5.825 1.447zm-7.143 6.587l-2.503-7.854h-2.834l3.994 10.674c-.14.398 0 .003-2.034 5.036l2.802.002 1.623-4.18 4.244-11.532h-2.836l-2.456 7.854zm-11.79-8.034c-.871 0-1.61.135-2.234.383V2.786h-2.679v15.55h2.679V9.624c.446-.203 1.05-.339 1.785-.339 2.502 0 2.726 1.06 2.726 2.055v6.996h2.658v-6.771c0-2.934-1.832-4.671-4.934-4.671zm-7.323 8.778c-.83.34-1.75.566-2.784.566-1.883 0-3.052-.59-3.052-3.493 0-2.925 1.169-3.492 3.052-3.492 1.034 0 1.953.204 2.784.543V7.528a8.639 8.639 0 0 0-3.233-.634c-3.41 0-5.299 2.087-5.299 5.85 0 3.767 1.89 5.831 5.299 5.831 1.192 0 2.27-.252 3.233-.636v-2.267zm-25.05-2.049c0 1.812-.656 2.431-2.289 2.431-1.613 0-2.268-.619-2.268-2.43v-6.55h-2.638v6.185c0 3.33 1.07 5.302 4.906 5.302 3.826 0 4.928-1.971 4.928-5.302V7.074h-2.64v6.55zM43.831 9.91c0-.667 1.632-.646 3.127-.67V6.894s-5.807-.237-5.807 1.447v9.995h2.68V9.91zM30 12.739c0-3.761 1.882-5.845 5.293-5.845 1.188 0 2.265.249 3.23.634v2.265a7.265 7.265 0 0 0-2.78-.542c-1.885 0-3.05.566-3.05 3.488 0 2.9 1.165 3.49 3.05 3.49 1.029 0 1.949-.226 2.78-.565v2.265a8.661 8.661 0 0 1-3.23.634c-3.41 0-5.293-2.06-5.293-5.824zm-10.875 1.175a3.8 3.8 0 0 0 3.039-1.516 8.357 8.357 0 0 1-8.217 9.889 8.357 8.357 0 0 1-8.357-8.358 8.357 8.357 0 0 1 12.243-7.4 3.806 3.806 0 0 0 1.292 7.385zM11.892 0c6.569 0 11.893 5.325 11.893 11.892 0 .236-.007.469-.02.7-.376-5.43-4.9-9.72-10.427-9.72-5.773 0-10.454 4.68-10.454 10.453 0 5.56 4.34 10.103 9.817 10.433-.267.018-.536.027-.809.027C5.325 23.785 0 18.461 0 11.892 0 5.325 5.325 0 11.892 0z"></path>
						</svg>
					</Link>
				</div>

				<div
					onClick={() => {
						setIsHamburgerMenu(!isHamburgerMenu)
					}}
					className={classNames(styles.hamburger, {
						[styles.active]: !isHamburgerMenu,
					})}
				>
					<svg
						className={styles.hamburger_svg}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						data-t="menu-svg"
						aria-labelledby="menu-svg"
						aria-hidden="true"
						role="img"
					>
						<title id="menu-svg">Меню</title>
						<path d="M21 4a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm0 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm0 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18z"></path>
					</svg>
				</div>
				<div
					className={classNames(styles.dropdown_vertical, {
						[styles.hidden]: isHamburgerMenu,
					})}
				>
					<div className={styles.wrapper_content}>
						<nav>
							<div className={styles.section}>
								<small>Каталог</small>
								<ul>
									<li>
										<span>Популярное</span>
									</li>
									<li>
										<span>Новинки</span>
									</li>
									<li>
										<span>По алфавиту</span>
									</li>
									<li>
										<span>Текущий сезон</span>
									</li>
									<li>
										<span>Календарь релизов</span>
									</li>
									<li>
										<span>Жанры</span>
									</li>
								</ul>
							</div>
							<div className={styles.section}>
								<ul>
									<li>
										<span>Манга</span>
									</li>
									<li>
										<span>Новости</span>
									</li>
									<li>
										<span>Команда</span>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
				<div
					className={classNames(styles.dropdown_horizontal, {
						[styles.hidden]: isHamburgerMenu,
					})}
				>
					<div className={styles.wrapper_content}>
						<nav>
							<div className={styles.section}>
								<ul>
									<li>
										<span>Популярное</span>
									</li>
									<li>
										<span>Новинки</span>
									</li>
									<li>
										<span>По алфавиту</span>
									</li>
									<li>
										<span>Текущий сезон</span>
									</li>
									<li>
										<span>Календарь релизов</span>
									</li>
								</ul>
							</div>
							<div className={styles.section}>
								<ul></ul>
							</div>
						</nav>
					</div>
				</div>

				<div className={styles.left}>
					<div
						onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}
						className={classNames(styles.tile, {
							[styles.active]: !isHamburgerMenu,
						})}
					>
						<span>Каталог</span>
					</div>
					<div className={styles.tile}>
						<span>Манга</span>
					</div>
					<div className={styles.tile}>
						<span>Новости</span>
					</div>
					<div className={styles.tile}>
						<span>Команда</span>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.user_action}>
						<ul>
							<li
								className={styles.tile}
								onMouseEnter={() => setIsVisible(true)}
								onMouseLeave={() => setIsVisible(false)}
							>
								<svg
									className={styles.icon_crown}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									data-t="premium-filled-svg"
									aria-labelledby="premium-filled-svg"
									aria-hidden="true"
									role="img"
								>
									<title id="premium-filled-svg">Премиум</title>
									<path d="M2.419 13L0 4.797 4.837 6.94 8 2l3.163 4.94L16 4.798 13.581 13z"></path>
								</svg>
								<div className={styles.text_wrapper}>
									<span className={styles.premium_header}>
										Попробовать бесплатно
									</span>
									<span>Премиум</span>
								</div>
								{isVisible && (
									<div className={styles.popup_body}>
										<div className={styles.wrapper_content}>
											<div className={styles.background}></div>
											<div className={styles.content}>
												<h3>
													<svg
														className={styles.premium_icon}
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														data-t="premium-svg"
														aria-labelledby="premium-svg"
														aria-hidden="true"
														role="img"
													>
														<title id="premium-svg">Только Премиум</title>
														<path d="M18.188 17l1.667-5.606-4.26 1.864L12 7.688l-3.596 5.57-4.259-1.864L5.812 17h12.376zm-14.08 1.285L1.614 9.9a1 1 0 0 1 1.36-1.2l4.673 2.045 3.512-5.442a1 1 0 0 1 1.68 0l3.514 5.442 4.674-2.046a1 1 0 0 1 1.36 1.201l-2.494 8.386a1 1 0 0 1-.959.715H5.067a1 1 0 0 1-.959-.715z"></path>
													</svg>
													14 дней бесплатно
												</h3>
												<p>
													Премиум дает безлимитный доступ к аниме, новым сериям
													через час после эфира в Японии, без рекламы.
													Попробуйте!
												</p>
											</div>
										</div>
									</div>
								)}
							</li>
							<li className={styles.tile}>
								<div className={styles.svg}>
									<svg
										className={styles.icon}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-t="search-svg"
										aria-labelledby="search-svg"
										aria-hidden="false"
										role="img"
									>
										<title id="search-svg">Поиск</title>
										<path d="M15.474 14.035l6.235 6.26a1 1 0 1 1-1.418 1.41l-6.228-6.253a7.5 7.5 0 1 1 1.41-1.418zM9.5 15a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"></path>
									</svg>
								</div>
							</li>
							<li className={styles.tile}>
								<div className={styles.svg}>
									<svg
										className={styles.icon}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-t="watchlist-svg"
										aria-labelledby="watchlist-svg"
										aria-hidden="false"
										role="img"
									>
										<title id="watchlist-svg">Смотреть позже</title>
										<path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path>
									</svg>
								</div>
							</li>
							<li className={styles.tile}>
								<div className={styles.svg}>
									<svg
										className={styles.icon}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-t="user-settings-svg"
										aria-labelledby="user-settings-svg"
										aria-hidden="true"
										role="img"
									>
										<title id="user-settings-svg">Меню аккаунта</title>
										<path d="M12 20a6.01 6.01 0 0 1-5.966-5.355L12 12.088l5.966 2.557A6.01 6.01 0 0 1 12 20m0-16c1.654 0 3 1.346 3 3s-1.345 3-2.999 3h-.002A3.003 3.003 0 0 1 9 7c0-1.654 1.346-3 3-3m7.394 9.081l-4.572-1.959A4.997 4.997 0 0 0 17 7c0-2.757-2.243-5-5-5S7 4.243 7 7c0 1.71.865 3.22 2.178 4.122l-4.572 1.959A.999.999 0 0 0 4 14c0 4.411 3.589 8 8 8s8-3.589 8-8c0-.4-.238-.762-.606-.919"></path>
									</svg>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div
				className={classNames(styles.page_overlay, {
					[styles.active]: !isHamburgerMenu,
				})}
			/>
		</div>
	)
}
