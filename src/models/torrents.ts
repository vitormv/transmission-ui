interface SwarmCount {
    connected: number,
    total: number,
}

interface TorrentItem {
    uid: string,
    name: string,
    status: string,
    eta: number,
    size: number,
    speed: {
        download: number,
        upload: number,
    },
    seeders: SwarmCount,
    leechers: SwarmCount,
}

export {
    SwarmCount,
    TorrentItem,
};
