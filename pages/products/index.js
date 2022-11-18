import Link from 'next/link';
import styles from '../../styles/Home.module.css'

const ProductsList = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2 className={styles.title}>商品一覧</h2>

                <ul>
                    <li>
                        <Link href="/products/smartphone">
                            <span>スマートフォン</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products/pc">
                            <span>パソコン</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products/headphone">
                            <span>ヘッドホン</span>
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default ProductsList;