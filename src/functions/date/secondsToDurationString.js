import humanizeDuration from 'humanize-duration';

const secondsToDurationString = seconds => (
    humanizeDuration(seconds * 1000)
);

export { secondsToDurationString };
