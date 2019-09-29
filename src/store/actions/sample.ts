export const SAMPLE_ACTION = 'SAMPLE_ACTION';
export const sampleAction = (name: string, value: string) => ({
    type: SAMPLE_ACTION,
    name,
    value,
});
