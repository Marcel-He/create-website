import path from "node:path";
import Url from "node:url";

const __dirname = Url.fileURLToPath(new URL(".", import.meta.url));
const INSTALLER_ROOT_PATH = path.join(__dirname, "..");
const BOILERPLATE_PATH = path.join(INSTALLER_ROOT_PATH, "boilerplates");
const OUTPUT_PATH_PLACEHOLDER = "__OUTPUT_PATH__";

export { BOILERPLATE_PATH, OUTPUT_PATH_PLACEHOLDER };
