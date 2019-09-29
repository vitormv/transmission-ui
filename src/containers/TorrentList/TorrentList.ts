import { TorrentList as TorrentListPresentation } from 'src/components/TorrentList';
import { connect } from 'react-redux';
import { torrentListSelector } from 'src/store/selectors/index';

const mapStateToProps = state => ({
    torrents: torrentListSelector(state),
});

const TorrentList = connect(mapStateToProps)(TorrentListPresentation);


export { TorrentList };
