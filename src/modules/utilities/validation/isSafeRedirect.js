export default function isSafeRedirect(uri, whitelist) {
    return whitelist.some((pattern) => pattern.test(uri));
}
