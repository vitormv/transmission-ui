import React from 'react';
import classNames from 'classnames';
import styles from './Sidebar.scss';

interface Props {
    active?: boolean,
    icon: string,
    label: string,
};

const SidebarItem = ({ active = false, icon, label }: Props) => (
    <li
        className={classNames({
            [styles.menuItem]: true,
            [styles.active]: active,
        })}
    >
        <span className={styles.icon}>
            {/* <ion-icon name={icon} /> */}
        </span>
        <span className={styles.label}>
            {label}
        </span>
    </li>
);

const Sidebar = () => (
    <div className={styles.container}>
        <div className={styles.sectionName}>Torrents</div>
        <ul className={styles.menu}>
            <SidebarItem active icon="ios-albums" label="Overview" />
            <SidebarItem icon="ios-arrow-dropdown" label="Downloading" />
            <SidebarItem icon="md-done-all" label="Completed" />
            <SidebarItem icon="ios-flash" label="Active" />
            <SidebarItem icon="ios-moon" label="Inactive" />
        </ul>
    </div>
);

export { Sidebar };
