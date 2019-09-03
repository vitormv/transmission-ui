import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';
import { secondsToDurationString } from 'src/functions/date/secondsToDurationString';
import styles from './TorrentList.scss';

const TorrentList = ({ torrents }) => (
    <div className={styles.container}>
        <ul className={styles.list}>
            <li className={styles.listHeader}>
                <span>Name</span>
                <span>Progress</span>
                <span>Download</span>
                <span>Download</span>
                <span>Upload</span>
                <span>Seeders</span>
                <span>Leechers</span>
            </li>
            {torrents.map(item => (
                <li key={item.uid} className={styles.item}>
                    <span className={styles.name}>
                        <div className={styles.torrentName}>
                            {item.name}
                        </div>
                        <div className={styles.info}>
                            <span className={styles.status}>{capitalize(item.status)}</span>
                            <span className={styles.eta}>{secondsToDurationString(item.eta)}</span>
                        </div>
                    </span>
                    <span>89%</span>
                    <span>18,70 Gb</span>
                    <span>16,03 Mbps</span>
                    <span>5,76 Mbps</span>
                    <span className={styles.swarmCounts}>
                        <span className={styles.swarmCounts}>
                            {item.seeders.connected}
                        </span>
                        <span className={styles.swarmTotal}>
                            /{item.seeders.total}
                        </span>
                    </span>
                    <span className={styles.swarmCounts}>
                        <span className={styles.swarmCounts}>
                            {item.leechers.connected}
                        </span>
                        <span className={styles.swarmTotal}>
                            /{item.leechers.total}
                        </span>
                    </span>
                </li>
            ))}
        </ul>
    </div>
);

TorrentList.propTypes = {
    torrents: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export { TorrentList };
