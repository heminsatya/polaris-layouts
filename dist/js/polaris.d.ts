/**
 * Import the Core Class
 */
import { Core } from "polaris-core/dist/js/modules/Core";
/**
 * Import Plugins
 */
import { Slideshow } from "polaris-slideshow/dist/js/modules/Slideshow";
/**
 * Polaris object
 */
declare const Polaris: {
    Core: typeof Core;
    Slideshow: typeof Slideshow;
};
/**
 * Export default
 */
export default Polaris;
