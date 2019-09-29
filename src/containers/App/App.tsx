import React from 'react';
import { Sidebar } from 'src/components/Sidebar/Sidebar';
import { TorrentList } from 'src/containers/TorrentList';
import styles from './App.scss';

const App = () => (
    <div className={styles.container}>
        <aside className={styles.sidebar}>
            <Sidebar />
        </aside>
        <main className={styles.content}>
            <TorrentList />
        </main>
    </div>
);

export { App };
