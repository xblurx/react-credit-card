export const formatString = (value: string) => {
    const STRING_LENGTH = 16;
    const strippedValue = value.replace(/\s/g, '');
    const hashes = STRING_LENGTH - strippedValue.length;

    if (hashes >= 0) {
        const numberWithHashes = strippedValue + '#'.repeat(hashes);
        return `${numberWithHashes.substr(
            0,
            4
        )} ${numberWithHashes.substr(4, 4)} ${numberWithHashes.substr(
            8,
            4
        )} ${numberWithHashes.substr(12, 4)}`;
    }
    return false;
};
