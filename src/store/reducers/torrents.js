import { SAMPLE_ACTION } from 'src/store/actions';

const defaultState = {
    items: [
        {
            uid: 'uid1',
            name: 'Ubuntu.Server.LTS.18.04.Complete.Edition.x64.plus-recommended.apps.iso',
            status: 'downloading',
            eta: 5520,
            size: 2337500000,
            speed: {
                download: 2003750,
                upload: 720000,
            },
            seeders: {
                connected: 23,
                total: 78,
            },
            leechers: {
                connected: 98,
                total: 517,
            },
        },
        {
            uid: 'uid2',
            name: 'Ubuntu.Server.LTS.18.04.Complete.Edition.x64.plus-recommended.apps.iso',
            status: 'downloading',
            eta: 5520,
            size: 2337500000,
            downloaded: 23375000,
            speed: {
                download: 2003750,
                upload: 720000,
            },
            seeders: {
                connected: 23,
                total: 78,
            },
            leechers: {
                connected: 98,
                total: 517,
            },
        },
    ],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case SAMPLE_ACTION:
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.name]: action.value,
                },
            };

        default:
            return state;
    }
};
