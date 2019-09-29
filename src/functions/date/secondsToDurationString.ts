import humanizeDuration from 'humanize-duration';

const secondsToDurationString = (seconds: number): String => (
    humanizeDuration(seconds * 1000)
);

export { secondsToDurationString };
