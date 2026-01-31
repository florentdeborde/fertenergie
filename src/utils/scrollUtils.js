import config from "../config";

export const scrollToTarget = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) { window.scrollTo({ top: target.offsetTop - config.globalScrollDiff, behavior: "smooth" }) }
}